import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { loginMember } from '../Redux/thunks';

export default function Login() {
    const history = useHistory()
    const dispatch = useDispatch()
    const loggedUser = useSelector(state=>state.Todos.setLoginMember)
    console.log(loggedUser)
    useEffect(()=>{
        if (loggedUser.name){
            history.push("/homepage")
        }
    })
    const submitHandle = (e)=>{
        e.preventDefault()
        if( e.target.email.value && e.target.password.value){
            dispatch(loginMember({
                email: e.target.email.value,
                password: e.target.password.value
            }))
            if (loggedUser.name){
                history.push("/homepage")
            }
        } else {
            alert("invlid input")
        }
        
    }


    return (
        <div>
            <form method="post" onSubmit={submitHandle}>
            <h1>Login Page</h1>
            Email<input type="text" name="email"  placeholder="Your Email" /><br/>
            Password<input type="password" name="password"  placeholder="Your Password" /><br/>
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}
