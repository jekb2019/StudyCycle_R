import React, { useState } from 'react';
import styles from './clock.module.css';

const Clock = (props) => {
    return (
        <>
            <span className={styles.currentTimeIndicator}>00:00:00</span>    
        </>
    )
};

export default Clock;