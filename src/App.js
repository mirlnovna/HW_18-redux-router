import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Auth from "./components/auth/Auth";
import TodoList from "./components/todo-llist/TodoList";

function App() {
  const [logged, setIsLogged] = useState(false);

  const submitHandler = () => {
    setIsLogged((prevState) => !prevState);
  };
  return (
    <div className="wrapper">
      <Header logged={logged} onSubmit={submitHandler} />
      <Routes>
        <Route path="/" element={<Auth onSubmit={submitHandler} />} />
        <Route path="/home" element={<TodoList />} />
      </Routes>
    </div>
  );
}

export default App;
