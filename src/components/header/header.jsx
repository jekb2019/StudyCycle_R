import React from 'react';
import styles from './header.module.css';

const Header = (props) => (
    <div className={styles.header}>
        <h1 className={styles.logo_wrapper}>
            <img className={styles.logo} src="/images/logo.png" alt="Study Cycle logo" onClick={() => {window.location.reload()}}/>
        </h1>
    </div>        
);

export default Header;