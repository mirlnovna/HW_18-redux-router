import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Form } from "./../todo-form/Form";
import { deleteAll } from "./../../redux/todo-list/actions/index";
import { Todos } from "../todo-Item/Todos";
import styled from "styled-components";

function TodoList() {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.operationsReducer);

  const [editFormVisibility, setEditFormVisibility] = useState(false);

  const [editTodo, setEditTodo] = useState("");

  const handleEditClick = (todo) => {
    setEditFormVisibility(true);
    setEditTodo(todo);
  };

  const cancelUpdate = () => {
    setEditFormVisibility(false);
  };

  return (
    <Wrapper>
      <p>
        <Link to="/">Logout</Link>
      </p>
      <h1>Todo List</h1>
      <Form
        editFormVisibility={editFormVisibility}
        editTodo={editTodo}
        cancelUpdate={cancelUpdate}
      />
      <Todos
        handleEditClick={handleEditClick}
        editFormVisibility={editFormVisibility}
      />
      {todos.length > 1 && (
        <button onClick={() => dispatch(deleteAll())}>
          DELETE ALL
        </button>
      )}
    </Wrapper>
  );
}

export default TodoList;
const Wrapper = styled.div`
  & .delete-all {
    position: relative;
    left: 480px;
    width: 350px;
    height: 30px;
    background-color: rgb(206, 226, 255);
    font-size: 1.3rem;
  }
  & h1 {
    position: relative;
    left: 570px;
  }
  & p {
    position: relative;
    left: 1100px;
    font-size: 2rem;
  }
`;
