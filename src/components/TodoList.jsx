import TodoItem from "./TodoItem"

export default function TodoList({todos, HandleDeletingTodo, HandleChangeCompleted, themeDark}) {

const ToggleCross = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    HandleDeletingTodo(newTodos);
}

const ToggleCheckbox = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    HandleChangeCompleted(newTodos);
}

 return( <>
<div className="row">
    <div className="col">
        <ul className="list-group"> 
            { todos &&
                todos.map((todo) => <TodoItem 
                    key={todo.id} 
                    todo={todo} 
                    ToggleCheckbox={ToggleCheckbox}
                    ToggleCross={ToggleCross}
                    themeDark={themeDark}/>)}
        </ul>
    </div>
</div>
</>);}