import { useState } from "react";
import Todoitem from "./Todoitem.jsx"
const Todolist = (props) => {
const activity= props.actarr
const setactivity= props.setactarr
    
    return (

        <div className="todo-list">
            <div className="list-heading"><div><p className="eyebrow">YOUR FOCUS</p><h2>Today&apos;s activity</h2></div><span>{activity.length} tasks</span></div>
            {
                activity.length===0?  <p className="empty-state">Your list is clear. Add a task to get started.</p> :   <div className="task-items">
                {
                    activity.map(function (item, index) {
                        return <Todoitem actarr={activity} setactarr={setactivity} activity={item.activity} order={index} id={item.id} />
                    })
                }


            </div>
            }
          
        </div>
    )
}
export default Todolist
