import React, { memo } from 'react';
import styles from './clock.module.css';

const Clock = memo((props) => (
    <>
        <span className={styles.currentTimeIndicator}>{props.currentTime}</span>    
    </>
));

export default Clock;