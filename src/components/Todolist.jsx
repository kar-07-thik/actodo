import { useState } from "react";
import Todoitem from "./Todoitem.jsx"
const Todolist = (props) => {
const activity= props.actarr
const setactivity= props.setactarr
    
    return (

        <div className="bg-violet-500 flex-grow p-5 rounded-md">
            <h1 className="text-2xl">Today's Activity</h1>
           
            {
                activity.length===0?  <p>you haven't any activities</p> :   <div className="py-2">
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