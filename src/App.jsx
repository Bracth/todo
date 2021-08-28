import "./custom.scss"
import Header from "./components/Header";
import "./scss/body.scss"
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { useState } from "react";
import {v4 as uuidv4} from "uuid";
import darkImage from "./images/bg-desktop-dark.jpg"
import lightImage from "./images/bg-desktop-light.jpg"
import TodoButton from "./components/TodoBotton";


function App() {

const [todos, setTodos] = useState([]);
const [themeDark, setThemeDark] = useState(true);
let backgroundImage = darkImage;

const HandelChangeTheme = (themeDark) => {
  setThemeDark(
themeDark);
}

const HandleTodoAdd = (task) => {
    const newTodo = {id:uuidv4(), task: task, completed: false}
    setTodos([...todos, newTodo]);
}

const ToggleInput = (task) => {
    HandleTodoAdd(task);
}

const HandleDeletingTodo = (NewTodos) => {
  setTodos(NewTodos);
}


const HandleChangeCompleted = (newTodos) => {
  setTodos(newTodos);
}

const ToggleClearCompleted = (newTodos) => {
  setTodos(newTodos);
}

if (!themeDark) {
  backgroundImage = lightImage;
}

  return (<>
  <img src={backgroundImage} alt="Background" className="background-image"/>
  <main className="container my-5">
  <Header themeDark={themeDark} HandelChangeTheme={HandelChangeTheme}/>
  <TodoInput themeDark={themeDark} ToggleInput={ToggleInput}/>
  <TodoList todos={todos} HandleChangeCompleted={HandleChangeCompleted} HandleDeletingTodo={HandleDeletingTodo} themeDark={themeDark}/>
  <TodoButton todos={todos} ToggleClearCompleted={ToggleClearCompleted} themeDark={themeDark}/>
</main>
  </>);
}

export default App;
