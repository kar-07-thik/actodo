import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Sign = (props) => {
    const navigate = useNavigate()
    const users = props.Users
    const setusers = props.Setusers
    const [euser, seteuser] = useState("")
    const [epass, setepass] = useState("")


    function handleEuser(e) {
        seteuser(e.target.value)


    }
    function handleEpass(e) {
        setepass(e.target.value)

    }
    let importUsers = () => {
        setusers([...users,{
            username: euser,
            password: epass
        }])
        navigate("/")
    }
    return (
        <main className="auth-shell">
            <section className="auth-card">
                <div className="brand-mark">A</div>
                <p className="eyebrow">ACTODO / GET STARTED</p>
                <h1>Build a better rhythm.</h1>
                <p className="auth-copy">Create your workspace and turn small steps into steady progress.</p>
                <div className="auth-form">
                    <label>Username<input value={euser} onChange={handleEuser} type="text" placeholder="Choose a username" /></label>
                    <label>Password<input value={epass} onChange={handleEpass} type="password" placeholder="Create a password" /></label>
                    <label>Confirm password<input type="password" placeholder="Repeat your password" /></label>
                    <button className="primary-button" onClick={importUsers}>Create workspace</button>
                </div>
                <p className="auth-footer">Already have an account? <Link to="/">Log in</Link></p>
            </section>
        </main>
    )
}
export default Sign
