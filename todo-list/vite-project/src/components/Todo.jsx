import { MdDelete, MdEdit } from "react-icons/md";
import EditForm from "./EditForm";

function Todo({ todo, deleteTodo, toggleCompleted, toggleEditing, editTodo }) {
  return (
    todo.isEditing ? <EditForm todo={todo} editTodo={editTodo}/>
    :
    <div className= {`todo ${todo.isCompleted ? "completed" : ""}`}>
      <p onClick={() => {toggleCompleted(todo.id)}}>{todo.content}</p>
      <div>
        <MdEdit style={{ cursor: "pointer" }} onClick={() => {toggleEditing(todo.id)}} />
        <MdDelete onClick={() => {deleteTodo(todo.id)}}
        style={{ cursor: "pointer", marginLeft: "5px" }} />
      </div>
    </div>
  );
}

export default Todo;
