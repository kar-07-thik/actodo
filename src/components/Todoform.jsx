import {useState} from "react"
const Todoform = (props) => {
    const activity = props.actarr 
    const setactivity = props.setactarr
    const [val, setval] = useState("")
    let inputHandler = (e) => {
        setval(e.target.value)
    }
    let add=()=>{
setactivity([...activity,{id:activity.length+1,activity:val}])
setval("")
    }
    return (
        <div className="todo-form">
            <p className="eyebrow">PLAN YOUR DAY</p>
            <h2>What&apos;s next?</h2>
            <p className="section-copy">Add one clear action and make it easy to begin.</p>
            <div className="add-row"><input value={val} onChange={inputHandler} type="text" placeholder="e.g. Review project notes"></input><button onClick={add} className="primary-button">Add task</button></div>
        </div>
    )
}
export default Todoform
