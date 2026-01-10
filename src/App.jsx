import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import {useState} from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Sign from "./pages/Signup.jsx"
import Log from "./pages/Login.jsx"
import Landing from "./pages/Landing.jsx"
import "./index.css"
const root = ReactDOM.createRoot(document.getElementById("root"))


function App() {


  const [users, setusers] = useState([
        {
            username: "karthik",
            password: "123"
        }
    ])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Log Users={users} Setusers={setusers}></Log>}></Route>
          <Route path={"/signUp"} element={<Sign Users={users} Setusers={setusers} />}></Route>
          <Route path={"/landing"} element={<Landing></Landing>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}


export default App
