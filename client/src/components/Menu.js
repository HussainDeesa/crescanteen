import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from "../context/appContext"
import MenuItem from './MenuItem'
import { useNavigate } from "react-router-dom";
import { Alert } from './Alert'

export const Menu = (props) => {
    const {setprogress,showAlert,alert}=props
    props.setprogress(0)
    let navigate = useNavigate();
    const context = useContext(noteContext)
    const { menu, getallmenu } = context
    useEffect(() => {
            getallmenu()
        // eslint-disable-next-line
    }, [])
    return (
        <>
            <div className='row my-3'>
                {menu.map((menu) => {
                    return <MenuItem key={menu._id} menu={menu} setprogress={setprogress} />
                })}
            </div>
        </>
    )
}
