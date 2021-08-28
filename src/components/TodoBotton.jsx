import styles from "../scss/TodoItem.module.scss"

export default function TodoButton({todos, ToggleClearCompleted, themeDark}) {
const uncompletedTodos = todos.filter((todo) => !todo.completed)

const HandleClearCompleted = () => {  
    const newTodos = todos.filter((todo) => !todo.completed)
    ToggleClearCompleted(newTodos)
}

let color = "";
let textColor = "secondary";

if (!themeDark) {
    color = "bg-light";
    textColor = "primary"
}



return <>

   
     <div className={`card bg-primary text-${textColor} ${color}`}>
         <div className="card-body row">
             <div className="col-auto me-auto">
              <span>{uncompletedTodos.length} item left</span>
             </div>
              <div className="col-auto">
                  <button onClick={HandleClearCompleted} className={`text-${textColor} ${styles.button}`}>Clear Completed</button>
             </div>
         </div>
     </div>
  

</>}