import { useState } from "react";
import Todoform from "./Todoform.jsx"
import Todolist from "./Todolist.jsx"
const Todo = () => {
    const [activity, setactivity] = useState([
 
    ])
    return (
        <div className="flex flex-wrap">


            <Todoform actarr={activity} setactarr={setactivity} />
            <Todolist actarr={activity} setactarr={setactivity} />

        </div>

    )
}
export default Todo