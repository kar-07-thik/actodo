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
        <h1>
            <div className="bg-black p-10">


                <div className="bg-white p-5 rounded-md">
                    <h1 className="font-bold text-3xl">Hey Hi 👋</h1>
                    <p>You can Signup here :)</p>
                    <div className="flex flex-col w-52 gap-2 my-2">
                        <input value={euser} onChange={handleEuser} type="text" placeholder="Username" className="border-2 bg-transparent focus:outline-hidden p-2 rounded-md"></input><br />
                        <input value={epass} onChange={handleEpass} type="text" placeholder="Password" className="border-2 bg-transparent focus:outline-hidden p-2 rounded-md"></input><br />
                        <input type="text" placeholder="comfrim passwaord" className="border-2 bg-transparent focus:outline-hidden p-2 rounded-md"></input><br />
                        <button className="bg-amber-500 p-2 rounded-md w-20" onClick={importUsers}>Sign Up</button>
                    </div>

                    <p>Already an account? <Link to="/" className="underline">LogIn</Link></p>
                </div>
            </div>
        </h1>
    )
}
export default Sign