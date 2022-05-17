import { Menu } from './Menu'
import { useNavigate } from 'react-router-dom';
import React, { useState,useContext } from 'react';
import appContext from '../context/appContext'
export default function Home(props) {
    const { setprogress, showAlert, alert } = props;
    const context = useContext(appContext)
    const {getallcartitems} = context
    let navigate = useNavigate()
    props.setprogress(0)
    const getuser = async () => {

        const response = await fetch(`api/auth/getuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
        })
        const json = await response.json()
    };
    getuser()
 
    return (
        <div>
            <Menu setprogress={setprogress} showAlert={showAlert} alert={alert} />
        </div>
    )
}


