import React, { useEffect, useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

function LoginPopup({setShowLogin}) {

        const [currentState, setCurrentState] = useState("Login")

        const [data, setData] = useState({
            name: "",
            email: "",
            password: ""
        })

        const onChangeHandler = (e) => {
            const name = e.target.name;
            const value = e.target.value;

            setData({...data, [name]: value});

        }

        useEffect(()=> {
            console.log(data);
            
        }, [data])

  return (
    <div className='login-popup'>
        <form className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currentState}</h2>
                <img 
                onClick={() => setShowLogin(false)}
                src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {currentState === "Login" ? <></> : <input name="name" onChange={onChangeHandler} value={data.name} type='text' placeholder='Your name' required/>}
                <input name='email' onChange={onChangeHandler} value={data.email} type='email' placeholder='Your email' required/>
                <input name='password' onChange={onChangeHandler} value={data.password} type='password' placeholder='password' required/>
            </div>
            <button>
                {currentState === "Sign up" ? "Create account" : "Login"}
            </button>
            <div className="login-popup-condition">
                <input type="checkbox" required/>
                <p>By continuing, i agree to the terms of use & privacy policy.</p>
            </div>
            {
                currentState === "Login" 
                ? <p>Create a new account? <span onClick={() => setCurrentState("Sign up")}>Click here</span></p> 
                : <p>Already have an account? <span onClick={() => setCurrentState("Login")}>Login here</span></p>
            }
            
           
        </form>
    </div>
  )
}

export default LoginPopup