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
        <div className="bg-black p-10">
            <div className="bg-white p-5 rounded-md">
                <h1 className="font-bold text-3xl">Hey Hi 🎉</h1>
                {
                    invalid ? <p>I help you manage your activities after you login:)</p> : <p className="text-red-600">Please SignUp frist!!</p>
                }

                <div className="flex flex-col w-52 gap-2 my-2">
                    <input value={euser} onChange={handleEuser} type="text" placeholder="Username" className="border-2 bg-transparent focus:outline-hidden p-2 rounded-md"></input><br />
                    <input value={epass} onChange={handleEpass} type="text" placeholder="Password" className="border-2 bg-transparent focus:outline-hidden p-2 rounded-md"></input><br />
                    <button className="bg-fuchsia-500 p-2 rounded-md w-20" onClick={checkUser}>Login</button>
                </div>

                <p>Don't have an account? <Link to="/signUp" className="underline">SignUp</Link></p>
            </div>
        </div>
    )
}
export default Log