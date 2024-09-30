import { useState } from "react";
import CreateForm from "./CreateForm";
import Todo from "./Todo";

function TodoWrapper() {
  const [todos, setTodods] = useState([
    { content: "打掃", id: Math.random(),
      isCompleted: false, isEditing: false },
    { content: "寫作業", id: Math.random(),
      isCompleted: false, isEditing: false },
  ]);

  const addTodo = (content) => {
    setTodods([...todos, { content, id: Math.random(),
      isCompleted: false, isEditing: false }]);
  };

  const deleteTodo = (id) => {
    setTodods(todos.filter((todo) => {
      return todo.id !== id
    }))
  }

  const toggleCompleted = (id) => {
    setTodods(todos.map((todo) => {
      return todo.id === id 
      ? {...todo, isCompleted: !todo.isCompleted}
      : todo
    }))
  }

  const toggleEditing = (id) => {
    setTodods(todos.map((todo) => {
      return todo.id === id 
      ? {...todo, isEditing: !todo.isEditing}
      : todo
    }))
  }

  const editTodo = (id, newContent) => {
    setTodods(todos.map((todo) => {
      return todo.id === id
      ?{...todo, content: newContent, isEditing: false}
      : todo
    }))
  }

  return (
    <div className="wrapper">
      <h1>待辦事項</h1>
      <CreateForm addTodo={addTodo} />
      {todos.map((todo) => {
        return <Todo toggleCompleted={toggleCompleted}
        toggleEditing={toggleEditing} editTodo={editTodo}
        todo={todo} key={todo.id} deleteTodo={deleteTodo}/>;
      })}
    </div>
  );
}

export default TodoWrapper;
