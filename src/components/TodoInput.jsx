import { useRef } from "react";

export default function TodoInput({ToggleInput, themeDark}){ 

const todoTaskRef = useRef();

let color = "";

if (!themeDark) {
    color = "bg-light text-primary";
}

const HandleInputSubmit = (e) => {
     e.preventDefault();
     const task = todoTaskRef.current.value; 
    ToggleInput(task)
    todoTaskRef.current.value = null;
    }

return(<>

<div className="row my-3">
    <div className="col">
        <form onSubmit={HandleInputSubmit}>
        <input 
            ref={todoTaskRef}
            type="text" 
            name="todo" 
            id="todo-input" 
            placeholder="Create a new todo..."
            className={`form-control form-control-lg ${color}`}/>
        </form>
    </div>
</div> 
</> );}