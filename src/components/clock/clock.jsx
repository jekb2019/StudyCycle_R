import React, { useState } from 'react';
import styles from './clock.module.css';

const Clock = (props) => {
    return (
        <>
            <span className={styles.currentTimeIndicator}>{props.currentTime}</span>    
        </>
    )
};

export default Clock;