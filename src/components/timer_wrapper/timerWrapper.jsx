import React from 'react';
import Timer from '../timer/timer'
import styles from './timerWrapper.module.css'

const TimerWrapper = (props) => (
    <div className={styles.wrapper}>
        <div className={styles.settings}>
            <span>2 hr 0 min - 0 hr 10 min - 5 cycles</span>
            <div className={styles.button}>
                <i className={`fas fa-cog ${styles.icon}`} id="setting-icon"></i>
            </div>
        </div>
        <Timer/>
    </div>     
    );

export default TimerWrapper;