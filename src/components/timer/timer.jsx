import React, { useRef, useState } from 'react';
import Clock from '../clock/clock';
import Controller from '../controller/controller';
import styles from './timer.module.css';
const Timer = (props) => {

    const [currentTime, setCurrentTime] = useState(props.service.getFormettedCurrentTime());
    const [isClockRunning, setIsClockRunning] = useState(false);

    const switchIsClockRunning = (status) => {
        if(status === undefined) {
            isClockRunning ? setIsClockRunning(false) : setIsClockRunning(true);
        } else {
            status? setIsClockRunning(true) : setIsClockRunning(false);
        }
    }

    const handleTimerRunningStatus = () => {
        switchIsClockRunning();
        isClockRunning ? props.service.stopTimer() : props.service.startTimer();
    }

    const handleResetButtonClicked = () => {
        props.handleClickSound();
        props.service.resetTimer();
        switchIsClockRunning(false);
    }



    return(
    <div className={styles.timer}>
        <div className={styles.indicators}>
            <div className={styles.indicator}>
                <span>Focus</span>
            </div>
            <div className={styles.status}>
                <div>
                    <i className={`fas fa-biking ${styles.cycle_icon}`}></i>
                    <span className={styles.cycle}>1/5</span>
                </div>
            </div>
            <div className={styles.indicator}>
                <span>Break</span>
            </div>
        </div>
        <div className={styles.clock_display}>
            <Clock className={styles.clock} formattedTime={currentTime}/>
            <div className={styles.button} onClick={handleResetButtonClicked}>
                <i className={`fas fa-redo-alt ${styles.reset_icon}`}></i>
            </div>
        </div>

        <Controller
            handleClickSound={props.handleClickSound}
            service={props.service}
            isClockRunning={isClockRunning}
            handleTimerRunningStatus={handleTimerRunningStatus}/>
    </div>
)};

export default Timer;