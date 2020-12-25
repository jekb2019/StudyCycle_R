import React, { useEffect, useRef, useState } from 'react';
import Clock from '../clock/clock';
import Controller from '../controller/controller';
import styles from './timer.module.css';
import Constants from '../../common/constants';

const constants = new Constants();
const timerStatusConstant = constants.getStatusConstants();

const Timer = (props) => {
    const focusIndicatorRef = useRef();
    const breakIndicatorRef = useRef();

    const [currentTime, setCurrentTime] = useState(props.service.getFormettedCurrentTime());
    const [isClockRunning, setIsClockRunning] = useState(false);
    const [retrievalInterval, setRetrievalInterval] = useState();
    const [timerStatus, setTimerStatus] = useState();

    const switchIsClockRunning = (operationStatus) => {
        if(operationStatus === undefined) {
            isClockRunning ? setIsClockRunning(false) : setIsClockRunning(true);
        } else {
            operationStatus? setIsClockRunning(true) : setIsClockRunning(false);
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
        setCurrentTime(props.service.getFormettedCurrentTime());
        setTimerStatus(timerStatusConstant.FOCUS);
        switchStatusDisplay(timerStatusConstant.FOCUS);
    }

    const switchStatusDisplay = (timerStatus) => {
        if(timerStatus === timerStatusConstant.FOCUS) {
            console.log("switch to focus display");
            focusIndicatorRef.current.style.opacity = "1";
            breakIndicatorRef.current.style.opacity = "0.3";

        } else {
            console.log("switch to break display");
            focusIndicatorRef.current.style.opacity = "0.3";
            breakIndicatorRef.current.style.opacity = "1";
        }
    }  


    const handleFastForward = () => {
        if(isClockRunning) {
            props.service.fastForward(180);
        }
    }

    const handleFastBackward = () => {
        if(isClockRunning) {
            props.service.fastBackward(180);
        }
    }

    useEffect(() => {
        // Retrieve current time from the service
        if(isClockRunning) {
            setRetrievalInterval(
                setInterval(() => {
                    setCurrentTime(props.service.getFormettedCurrentTime());
                }, 1000)
            );
        } else {
            clearInterval(retrievalInterval);
        }   
    }, [isClockRunning]);

    useEffect(() => {
        if(timerStatus !== props.service.getCurrentStatus()) {
            setTimerStatus(props.service.getCurrentStatus());
            switchStatusDisplay(props.service.getCurrentStatus());
        }
    }, [currentTime]);

    return(
    <div className={styles.timer}>
        <div className={styles.indicators}>
            <div ref={focusIndicatorRef} className={`${styles.indicator} ${styles.focusIndicator}`}>
                <span>Focus</span>
            </div>
            <div className={styles.status}>
                <div>
                    <i className={`fas fa-biking ${styles.cycle_icon}`}></i>
                    <span className={styles.cycle}>1/5</span>
                </div>
            </div>
            <div ref={breakIndicatorRef} className={`${styles.indicator} ${styles.breakIndicator}`}>
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
            handleTimerRunningStatus={handleTimerRunningStatus}
            handleFastForward={handleFastForward}
            handleFastBackward={handleFastBackward}/>
    </div>
)};

export default Timer;