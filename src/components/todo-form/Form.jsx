import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  addTodo,
  handleEditSubmit,
} from "./../../redux/todo-list/actions/index";
import styled from "styled-components";

export const Form = ({ editFormVisibility, editTodo, cancelUpdate }) => {
  const dispatch = useDispatch();

  const [todoValue, setTodoValue] = useState("");

  const [editValue, setEditValue] = useState("");

  useEffect(() => {
    setEditValue(editTodo.todo);
  }, [editTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let todoObj = {
      id: Math.random().toString(),
      todo: todoValue,
      completed: false,
    };
    setTodoValue("");
    dispatch(addTodo(todoObj));
  };

  const editSubmit = (e) => {
    e.preventDefault();
    let editedObj = {
      id: editTodo.id,
      todo: editValue,
      completed: false,
    };
    dispatch(handleEditSubmit(editedObj));
  };
  return (
    <>
      <Container>
        {editFormVisibility === false ? (
          <form className="custom-form" onSubmit={handleSubmit}>
            <div className="input-and-btn">
              <input
                type="text"
                className="form-control"
                required
                value={todoValue}
                onChange={(e) => setTodoValue(e.target.value)}
              />
              <button type="submit" className="btn btn-secondary btn-md">
                ADD
              </button>
            </div>
          </form>
        ) : (
          <form className="form-group custom-form" onSubmit={editSubmit}>
            <div className="input-and-btn">
              <input
                type="text"
                className="form-control"
                required
                value={editValue || ""}
                onChange={(e) => setEditValue(e.target.value)}
              />
              <button type="submit">Update</button>
            </div>
            <button type="button" className="btn-back" onClick={cancelUpdate}>
              BACK
            </button>
          </form>
        )}
      </Container>
    </>
  );
};

const Container = styled.div`
  & .input-and-btn {
    position: relative;
    left: 470px;
  }
  input {
    width: 300px;
    height: 30px;
  }
  button {
    width: 60px;
    height: 36px;
    background-color: rgba(133, 182, 177, 1);
    border-radius: 5px;
  }
  & .btn-back {
    position: relative;
    top: -36px;
    left: 840px;
  }
`;
