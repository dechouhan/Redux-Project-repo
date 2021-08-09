import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom"
import { signupMember } from '../Redux/thunks';

export default function Signup() {
    const history = useHistory()
    const dispatch = useDispatch()
    const loggedUser = useSelector(state=>state.Todos.setLoginMember)
    useEffect(()=>{
        if (loggedUser.name){
            history.push("/homepage")
        }
    },[loggedUser])
    const submitHandle = (e)=>{
        e.preventDefault()
        if( e.target.name.value && e.target.email.value && e.target.password.value && (e.target.password.value === e.target.reEnterPassword.value)){
            dispatch(signupMember({name: e.target.name.value,
                email: e.target.email.value,
                password: e.target.password.value
            }))
        } else {
            alert("invlid input")
        }
        
    }

    return (
        <div>
            <form method="post" onSubmit={submitHandle}>
            <h1>SignUp Page</h1>
            Name<input type="text" name="name" placeholder="Your Name" /><br/>
            Email<input type="text" name="email"  placeholder="Your Email" /><br/>
            Password<input type="password" name="password"  placeholder="Your Password" /><br/>
            Retype Password<input type="password" name="reEnterPassword" placeholder="Re-enter Password" /><br/>
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}
