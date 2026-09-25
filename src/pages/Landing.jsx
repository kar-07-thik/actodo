import { useState } from 'react'
import Header from "../components/Header.jsx"
import Card from "../components/Card.jsx"
import Todo from "../components/Todo.jsx"
import { useLocation } from 'react-router-dom'
function Landing(){
    const data = useLocation()
    console.log(data.state.user)
return(
      <main className="dashboard">
        <div className="dashboard-panel">
          <Header username={data.state.user}></Header>
          <div className="stats-grid">
            <Card bgColor={"#e3f2e7"} title={"23°"} subtitle={"Chennai today"} />
            <Card bgColor={"#eef1f8"} title={"20 Dec"} subtitle={"Tuesday, 14:02"} />
            <Card bgColor={"#f5efe3"} title={"0"} subtitle={"Tasks completed"}/>
          </div>
          <Todo/>
        </div>
      </main>
)
}
export default Landing
