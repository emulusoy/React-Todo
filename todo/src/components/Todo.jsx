import { IoIosRemoveCircle } from "react-icons/io";
import { MdEditDocument } from "react-icons/md";
import '../App.css'
function Todo({todo,onRemoveTodo}) {
  const {id,content}=todo;
  const removeTodo=()=>{
    onRemoveTodo(id);
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        border:"1px solid lightBlue",
        padding:"10px",
        marginTop:"10px"
      }}
    >
      <div>{content}</div>
      <div>
        <IoIosRemoveCircle className="todo-icons" onClick={removeTodo}/>
        <MdEditDocument className="todo-icons"/>
      </div>
    </div>
  );
}

export default Todo;
