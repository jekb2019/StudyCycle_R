import React from 'react';
import styles from './header.module.css';

const Header = (props) => (
    <div className={styles.header}>
        <img className={styles.logo} src="/images/logo.png" alt="Study Cycle Logo"/>
    </div>        
);

export default Header;