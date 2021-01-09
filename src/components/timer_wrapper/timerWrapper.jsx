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
                    </div> 
                    <span className={styles.settedTime_indicator}> 1 hr 10 min</span> 
                    <div className={styles.small_description}>
                        <span>Break</span>
                    </div>
                    <span className={styles.settedTime_indicator}> 0 hr 10 min</span> 
                    <div className={styles.small_description}>
                        <span>Cycles</span>
                    </div>

                </span>
                <div className={styles.button} onClick={props.handleSettingWindowToggle}>
                    <i className={`fas fa-cog ${styles.icon}`} id="setting-icon"></i>
                </div>
            </div>
            <Timer/>
        </div>
    );     
};

export default TimerWrapper;