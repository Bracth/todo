import sun from "../images/icon-sun.svg"
import moon from "../images/icon-moon.svg"
import styles from "../scss/TodoItem.module.scss"


export default function Header({themeDark, HandelChangeTheme}) { 

let themeIcon = sun;

if (themeDark === false) {
        themeIcon = moon;
}

const HandleClickOnIcon = () => {
        themeDark = !themeDark;
        HandelChangeTheme(themeDark)
}

return( <> 
<div className="row mb-4 justify-content-between">
        <div className="col-auto me-auto">
                <h1 id={styles.title} className="text-white">TODO</h1>
        </div>
        <div className="col-auto">
                <button onClick={HandleClickOnIcon} className={styles.button}>
                <img src={themeIcon} alt="" />
                </button>
        </div>
</div>
</>);}