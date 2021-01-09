import React, { useState } from 'react';
import Timer from '../timer/timer';
import styles from './timerWrapper.module.css';


const TimerWrapper = (props) => {
    return(
    <div className={styles.wrapper}>
        <div className={styles.settings}>
            <span>
                <div className={styles.small_description}>
                    <span>Focus</span>
                    </div> hr  min <div className={styles.small_description}><span>Break</span></div> hr  min <div className={styles.small_description}>
                    <span>Cycles</span>
                </div>

            </span>
            <div className={styles.button}>
                <i className={`fas fa-cog ${styles.icon}`} id="setting-icon"></i>
            </div>
        </div>
        <Timer/>
    </div>
    );     
};

export default TimerWrapper;