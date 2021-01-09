import React, { useState } from 'react';
import styles from './clock.module.css';

const Clock = (props) => {
    return (
        <div className={styles.clock}>
            <span>00:00:00</span>    
        </div>
    )};

export default Clock;