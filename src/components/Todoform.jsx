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
        <div className="">
            <h1 className="font-bold text-2xl">Manage Activity</h1>
            <input value={val} onChange={inputHandler} className="border p-2 my-2 focus:outline-hidden" type="text" placeholder="Enter the activity"></input>
            <button onClick={add} className="bg-black p-2 text-white m-2">Add</button>
        </div>
    )
}
export default Todoform