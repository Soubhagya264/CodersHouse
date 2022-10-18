import React from 'react'
import {Link} from 'react-router-dom';
import styles from "./Navigation.module.css";
import { logout } from '../../../http';
import { setAuth } from '../../../store/authSlice';
import { useDispatch, useSelector } from 'react-redux';
const Navigation = () => {
    const {isAuth}= useSelector((state) =>state.auth);
    const dispatch = useDispatch();
    const logoutUser = async () => {
       try{
        const {data}=await logout();
        dispatch(setAuth(data))
       }catch(e){}
    }

    const brandStyle={
        color: 'white',
        textDecoration:"none",
        fontSize: "24px",
        fontWeight: "bold",
        display:"flex",
        alignItems:"center"
    }
    const logoText={
        marginLeft: "5px",
    }
  return (
    <nav className={`${styles.navbar} container`}>
        <Link style={brandStyle} to="/">
            <img src="/images/logo.png" alt="logo" width="40" height="40"/>
                <span style={logoText}>
                    CodersHouse
                </span>
            
        </Link>
        {isAuth && <button onClick={logoutUser}>Logout</button>}
    </nav>
  )
}

export default Navigation