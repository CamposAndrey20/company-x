import React from 'react'
import * as styles from './navbar.module.scss';

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <h1 className={styles.nav__heading}>Company Name</h1>
        </nav>
    )
}

export default Navbar