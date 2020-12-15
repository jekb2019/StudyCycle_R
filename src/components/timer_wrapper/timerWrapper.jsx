import React from 'react';
import Timer from '../timer/timer'
import styles from './timerWrapper.module.css'

const TimerWrapper = (props) => {
    const handleSettingClick = () => {
        props.handleSettingClick();
    }

    return(
    <div className={styles.wrapper}>
        <div className={styles.settings}>
            <span>2 hr 0 min &mdash; 0 hr 10 min &mdash; 5 Cycles</span>
            <div className={styles.button} onClick={handleSettingClick}>
                <i className={`fas fa-cog ${styles.icon}`} id="setting-icon"></i>
            </div>
        </div>
        <Timer/>
    </div>);     
};

export default TimerWrapper;