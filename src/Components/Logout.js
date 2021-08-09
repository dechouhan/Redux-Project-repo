import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { resetLoginMember } from '../Redux/Actions/allAction';

export default function Logout() {
    const history = useHistory()
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(resetLoginMember())
        history.push("/login")
    },[dispatch])
    return (
        <div>
        </div>
    )
}
