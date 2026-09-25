import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
const Log = (props) => {
    const navigate = useNavigate()
    const [euser, seteuser] = useState("")
    const [epass, setepass] = useState("")
    const [invalid, setinvalid] = useState("true")
    const users= props.Users
 
    function checkUser() {
        let userFound=false
        users.forEach(function (item) {
            if (item.username === euser && item.password === epass) {
                console.log("login Success")
                userFound=true
                navigate("/landing",{state:{user:euser}})
            }
        })
        if(userFound==false){
            console.log("login Failed")
            setinvalid(false)
        }

        console.log(users)

    }

    function handleEuser(e) {
        seteuser(e.target.value)


    }
    function handleEpass(e) {
        setepass(e.target.value)

    }
    return (
        <main className="auth-shell">
            <section className="auth-card">
                <div className="brand-mark">A</div>
                <p className="eyebrow">ACTODO / YOUR DAILY SPACE</p>
                <h1>Make room for what matters.</h1>
                {invalid ? <p className="auth-copy">A calm, focused place to keep your day moving.</p> : <p className="auth-error">We couldn&apos;t find that account. Try again or sign up.</p>}
                <div className="auth-form">
                    <label>Username<input value={euser} onChange={handleEuser} type="text" placeholder="Enter your username" /></label>
                    <label>Password<input value={epass} onChange={handleEpass} type="password" placeholder="Enter your password" /></label>
                    <button className="primary-button" onClick={checkUser}>Continue</button>
                </div>
                <p className="auth-footer">New here? <Link to="/signUp">Create an account</Link></p>
            </section>
        </main>
    )
}
export default Log
