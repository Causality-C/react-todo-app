import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList/TodoList";
import Submission from "./components/Submission/Submission";
import "./styles.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [currentTodo, setCurrentTodo] = useState("");
  const [completedList, setCompletedList] = useState([]);

  // Totally Non-Intrusive Feature: Alert users when every item is checked off
  useEffect(() => {
    if (todoList.length == 0 && completedList.length > 0) {
      alert("Congraduations, you are done with your todo list");
    }
  }, [todoList]);

  // ADD ITEM TO TODO LIST
  function addTodo() {
    if (currentTodo) {
      setTodoList([...todoList, currentTodo]);
      setCurrentTodo("");
    } else {
      console.log("ENTER SOMETHING INTO THE TODO LIST");
    }
  }
  // MARK ITEM OFF TODO LIST
  function markTodo(index) {
    if (todoList.length > index) {
      let tempList = [];
      for (let i = 0; i < todoList.length; i++) {
        i !== index && tempList.push(todoList[i]);
      }
      setCompletedList([...completedList, todoList[index]]);
      setTodoList(tempList);
    } else {
      console.log("OUT OF BOUNDS");
    }
  }

  return (
    <div>
      <h1>Todo List Application</h1>
      <Submission
        value={currentTodo}
        onChange={setCurrentTodo}
        submit={addTodo}
      />
      <h2>Your Todo List</h2>
      <TodoList todoList={todoList} function={markTodo} />
      <h2>Completed Tasks</h2>
      <TodoList todoList={completedList} function={() => {}} strike={true} />
    </div>
  );
}

export default App;
