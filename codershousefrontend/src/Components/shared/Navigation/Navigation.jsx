import React from 'react'
import {Link} from 'react-router-dom';
import styles from "./Navigation.module.css";
const Navigation = () => {
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
    </nav>
  )
}

export default Navigation