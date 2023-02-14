import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiFillEdit } from "react-icons/ai";
import { FcFullTrash } from "react-icons/fc";
import styled from "styled-components";

import { removeTodo, handleCheckbox } from "../../redux/todo-list/actions";

export const Todos = ({ handleEditClick, editFormVisibility }) => {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.operationsReducer);
  return todos.map((todo) => (
    <Container key={todo.id}>
      {editFormVisibility === false && (
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => dispatch(handleCheckbox(todo.id))}
        ></input>
      )}
      <p
        style={
          todo.completed === true
            ? { textDecoration: "line-through" }
            : { textDecoration: "none" }
        }
      >
        {todo.todo}
      </p>
      <div>
        {editFormVisibility === false && (
          <>
            <span onClick={() => handleEditClick(todo)}>
              <AiFillEdit />
            </span>
            <span onClick={() => dispatch(removeTodo(todo.id))}>
              <FcFullTrash />
            </span>
          </>
        )}
      </div>
    </Container>
  ));
};
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
  position: relative;
  left: 470px;
  top: 20px;
  & p {
    position: relative;
    top: -16px;
    left: 50px;
    font-size: 1.3rem;
  }
  span {
    font-size: 1.4rem;
    margin: 10px;
    position: relative;
    left: 70px;
  }
  input {
    position: relative;
    top: -20px;
    left: 10px;
    width: 20px;
  }
`;
