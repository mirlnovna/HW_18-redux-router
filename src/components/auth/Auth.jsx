import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authActionTypes } from "./../../redux/todo-list/reducers/AuthReducer";
import styled from "styled-components";

const Auth = ({ onSubmit }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formState, setState] = useState({
    email: "",
    password: "",
  });
  const inputChangeHandler = (name) => {
    return (e) => {
      setState((prevState) => ({ ...prevState, [name]: e.target.value }));
    };
  };

  const submitHandler = (e) => {
    e.preventDefault();
    onSubmit();
    if (
      formState.email === "test@gmail.com" &&
      formState.password === "121212"
    ) {
      dispatch({
        type: authActionTypes.LOGIN,
        payload: formState.email,
      });
      navigate("/home");
    }
  };
  return (
    <Main>
      <section>
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              onChange={inputChangeHandler("email")}
              value={formState.email}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={inputChangeHandler("password")}
              value={formState.password}
            />
          </div>
          <button>Login</button>
        </form>
      </section>
    </Main>
  );
};

export default Auth;
const Main = styled.div`
  width: 400px;
  height: 300px;
  background-color: #148b8b;
  position: relative;
  left: 420px;
  top: 70px;
  border-radius: 20px;
  color: white;
  & input {
    display: flex;
    width: 320px;
    position: relative;
    left: 35px;
    top: 40px;
    height: 36px;
    border-radius: 10px;
    border: none;
    margin: 10px;
  }
  & button {
    width: 190px;
    height: 40px;
    border-radius: 20px;
    background-color: antiquewhite;
    position: relative;
    top: 56px;
    cursor: pointer;
    left: 100px;
    font-size: 1.2rem;
    border: none;
    box-shadow: 2px 2px 4px 4px;
  }
  & label {
    position: relative;
    top: 40px;
    left: 50px;
    font-size: 1.3rem;
  }
`;
