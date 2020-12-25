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

    const getFocusHMS = () => {
        return {
            hours: props.service.getFocusTimeHour(),
            minutes: props.service.getFocusTimeMinute(),
            seconds: props.service.getFocusTimeSecond()
        }
    }

    const getBreakHMS = () => {
        return {
            hours: props.service.getBreakTimeHour(),
            minutes: props.service.getBreakTimeMinute(),
            seconds: props.service.getBreakTimeSecond()
        }
    }

    return(
    <div className={styles.wrapper}>
        <div className={styles.settings}>
            <span>
                <div className={styles.small_description}>
                    <span>Focus</span>
                    </div>{getFocusHMS().hours} hr {getFocusHMS().minutes} min <div className={styles.small_description}><span>Break</span></div>{getBreakHMS().hours} hr {getBreakHMS().minutes} min <div className={styles.small_description}>
                    <span>Cycles</span>
                </div>
                {props.service.getMaxCycle()}
            </span>
            <div className={styles.button} onClick={()=>{handleSettingClick(); props.handleClickSound();}}>
                <i className={`fas fa-cog ${styles.icon}`} id="setting-icon"></i>
            </div>
        </div>
        <Timer 
            handleClickSound={props.handleClickSound}
            service={props.service}/>
    </div>
    );     
};

export default TimerWrapper;