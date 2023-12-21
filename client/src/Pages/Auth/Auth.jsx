import React, { useState, useSyncExternalStore } from 'react'
import icon from '../../assets/Main-logo.png'
import '../Auth/Auth.css'
import AboutAuth from './AboutAuth'
import { signup, login } from '../../actions/auth'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Auth = () => {

    const [isSignup, setisSignup] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSwitch = () => {
        setisSignup(!isSignup)
    }

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSubmit = (e) =>{
        e.preventDefault()  /* if we use this while clicking login button link add wont change =email =password(default link add) */
        if(!email && !password){
            alert("Enter Email and Password")
        }

        if(isSignup){
            if(!name){
                alert("Enter your Name")
            }
            dispatch(signup({ name, email,password }, navigate)) //dispatch is used becoz reducer vll receive all the data in actions
        }else{
            dispatch(login({ email, password }, navigate))
        }
    }

  return (
    <section className='auth-section'>
        { isSignup && 
        <AboutAuth/>}
        <div className='auth-container-2'>
            { !isSignup && <img src={icon} alt='stack overflow' className='login-logo'/>}
            <form onSubmit={handleSubmit}> {/* onsubmit performs several action */}
                {
                    isSignup && ( 
                    <label htmlFor="name">
                    <h4>Name</h4>
                    <input type="text" name='name' id='name' onChange={(e) =>{setName(e.target.value)}} />
                </label>
                    )
                }
                <label htmlFor="email">
                    <h4>Email</h4>
                    <input type="email" name='email' id='email' onChange={(e) =>{setEmail(e.target.value)}} />
                </label>
                <label htmlFor="password">
                    <div style={{display:'flex' , justifyContent: 'space-between'}}>
                    <h4>Password</h4>
                    { !isSignup && <p style={{color : '#007ac6', fontSize:'13px'}}>forget password?</p> }
                    </div> 
                    <input type="password" name='password' id='password' onChange={(e) =>{setPassword(e.target.value)}} />
                    { isSignup && <p style={{color : '#666767', fontSize : '13px'}}>Passwords must contain at least eight <br/>characters,including at least 1 letter<br/> and 1 number.</p>}
                </label>
                {
                    isSignup && (
                        <label htmlFor="check">
                            <input type="checkbox" id="check"/>
                            <p style={{fontSize : '11px'}}>Opt-in to receive occasional<br/>product updates, user research invitations,<br/> company announcements, and digests.</p>
                        </label>
                    )
                }
                <button type='submit' className='auth-btn'>{ isSignup ? 'sign up': 'Log in'}</button>
                {
                    isSignup && (
                        <p style={{color : '#666767', fontSize : '13px'}}>
                            By clicking "Sign up", you agree to our 
                            <span style={{color : '#007ac6'}}> terms of<br/> service</span>,
                            <span style={{color : '#007ac6'}}> privacy policy</span> and
                            <span style={{color : '#007ac6'}}> cookie policy</span>
                        </p>
                    )
                }
            </form>
            <p>
                { isSignup? 'Already have an account?' : "Don't have an account?"}
                <button type='button' className='handle-switch-btn' onClick={handleSwitch}>{ isSignup ? "Log in" : "sign up"}</button>
            </p>
        </div>
    </section>
  )
}

export default Auth
