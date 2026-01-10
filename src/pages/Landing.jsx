import { useState } from 'react'
import Header from "../components/Header.jsx"
import Card from "../components/Card.jsx"
import Todo from "../components/Todo.jsx"
import { useLocation } from 'react-router-dom'
function Landing(){
    const data = useLocation()
    console.log(data.state.user)
return(
      <div className="bg-black p-10 ">
      <div className="bg-white p-5 border rounded-md">
        <Header username={data.state.user}></Header>
        <div className="text-center flex justify-between my-5 gap-5 flex-wrap">
          <Card bgColor={"red"} title={"23"} subtitle={"Chennai"} />
          <Card bgColor={"pink"} title={"20 December"} subtitle={"14:02:30"} />
          <Card bgColor={"yellow"} title={"Bulid Using"} subtitle={"React"}/>
        </div>
        <Todo/>
      </div>
    </div>
)
}
export default Landing