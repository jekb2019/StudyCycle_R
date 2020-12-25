import React, { useState } from 'react';
import styles from './clock.module.css';

const Clock = (props) => {
    return (
    <div className={styles.clock}>
       <span>{props.formattedTime}</span>    
    </div>
    )};

export default Clock;