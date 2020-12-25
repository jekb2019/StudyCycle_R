import React, { useState } from 'react';
import Timer from '../timer/timer';
import styles from './timerWrapper.module.css';
import Constants from '../../common/constants';

const constants = new Constants();
const status = constants.getStatusConstants();

const TimerWrapper = (props) => {
    const handleSettingClick = () => {
        props.handleSettingClick();
    }    

    return(
    <div className={styles.wrapper}>
        <div className={styles.settings}>
            <span><div className={styles.small_description}><span>Focus</span></div>2 hr 0 min <div className={styles.small_description}><span>Break</span></div>0 hr 10 min <div className={styles.small_description}><span>Cycles</span></div>5</span>
            <div className={styles.button} onClick={()=>{handleSettingClick(); props.handleClickSound();}}>
                <i className={`fas fa-cog ${styles.icon}`} id="setting-icon"></i>
            </div>
        </div>
        <Timer 
            handleClickSound={props.handleClickSound}
            service={props.service}/>
    </div>);     
};

export default TimerWrapper;