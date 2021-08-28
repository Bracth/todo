import styles from "../scss/TodoItem.module.scss";
import cross from "../images/icon-cross.svg";

export default function TodoItem({todo, ToggleCross, ToggleCheckbox, themeDark}){

let color = "";

if (!themeDark) {
    color = "bg-light text-primary";
}


const {id, task, completed} = todo;
let checkClass = "";

const HandleCross = () => {
    ToggleCross(id);
}

const HandleCheckbox = () => {
    ToggleCheckbox(id);
}

if(completed) { checkClass = "text-decoration-line-through text-muted" } 

return (<>
    <li className={`list-group-item ${color}`}>
        <div className="d-flex bd-highlight mb-4">
             <div className=" bd-highlight">
                 <input 
                    checked={completed}
                   onChange={HandleCheckbox}
                    type="checkbox" 
                    className="form-check-input mt-2"/>
             </div>
            <div className=" bd-highlight">
                {}
                <span className={`m-3 fs-5 ${checkClass}`}> 
                     {task} 
                    </span>
            </div>
            <div className="ms-auto  bd-highlight">
                 <button   
                        onClick={HandleCross}
                     className={`${styles.button}`}>
                    <img src={cross} alt="Cross" />
                    </button>
            </div>
        </div>
    </li>
</>)}