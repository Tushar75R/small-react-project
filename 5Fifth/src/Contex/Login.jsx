import React, { useState, useContext } from 'react'
import UserContex from './UserContex';

function Login() {
    const [username , setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { setData } = useContext(UserContex);
    const handleClick  = (e) =>{
        e.preventDefault();
        setData({username, password})
        setUsername("")
        setPassword("")
    }
  return (
    <div>
        <h2>Login</h2>
        <input type='text' value={username} placeholder='username' onChange={(e) => setUsername(e.target.value)}/>
        {" "}
        <input type='text' value={password} placeholder='password' onChange={e=> setPassword(e.target.value)}/>
        {"  "}
        <button onClick={handleClick}> submit</button>
    </div>
  )
}

export default Login