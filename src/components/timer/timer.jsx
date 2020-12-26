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
    const cycleIndicatorRef = useRef();

    const [currentTime, setCurrentTime] = useState(props.service.getFormettedCurrentTime());
    const [isClockRunning, setIsClockRunning] = useState(false);
    const [retrievalInterval, setRetrievalInterval] = useState();
    const [timerStatus, setTimerStatus] = useState();
    const [currentCycle, setCurrentCycle] = useState(props.service.getCurrentCycle());
    const [maxCycle, setMaxCycle] = useState(props.service.getMaxCycle());
    const [isGoalCycleReached, setIsGoalCycleReached] = useState(props.isGoalCycleReached);

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
        updateCurrentCycle(1);
    }

    const switchStatusDisplay = (timerStatus) => {
        if(timerStatus === timerStatusConstant.FOCUS) {
            focusIndicatorRef.current.style.opacity = "1";
            breakIndicatorRef.current.style.opacity = "0.3";

        } else {
            focusIndicatorRef.current.style.opacity = "0.3";
            breakIndicatorRef.current.style.opacity = "1";
        }
    }  

    const handleFastForward = () => {
        props.service.fastForward(180);
        setCurrentTime(props.service.getFormettedCurrentTime());
        setIsGoalCycleReached(props.service.getIsGoalCycleReached());

    }

    const handleFastBackward = () => {
        props.service.fastBackward(180);
        setCurrentTime(props.service.getFormettedCurrentTime());
        
    }

    const updateCurrentCycle = (cycleNum) => {
        setCurrentCycle(cycleNum);
        cycleIndicatorRef.current.innerHTML = `${cycleNum}/${props.maxCycleSetting}`;
    }

    useEffect(() => {
        setIsGoalCycleReached(props.isGoalCycleReached);
    },[props.isGoalCycleReached])

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
        document.title = `Study Cycle \u205f\u205f ${props.service.getFormettedCurrentTime()}`; // change tab title to match the current time
        if(timerStatus !== props.service.getCurrentStatus()) {
            setTimerStatus(props.service.getCurrentStatus());
            switchStatusDisplay(props.service.getCurrentStatus());
        }
        const tempCurrentCycle = props.service.getCurrentCycle();
        if(currentCycle !== tempCurrentCycle) {
            updateCurrentCycle(tempCurrentCycle);
        }
        const tempGoalCycleReachedStatus = props.service.getIsGoalCycleReached();
        if(isGoalCycleReached !== tempGoalCycleReachedStatus) {
            setIsGoalCycleReached(tempGoalCycleReachedStatus);
        }
        console.log(props.service.traceStatus())
        setMaxCycle(props.maxCycleSetting);
    }, [currentTime, maxCycle]);

    return(
    <div className={styles.timer}>
        <div className={styles.indicators}>
            <div ref={focusIndicatorRef} className={`${styles.indicator} ${styles.focusIndicator}`}>
                <span>Focus</span>
            </div>
            <div className={styles.status}>
                <div>
                    <i className={`fas fa-biking ${styles.cycle_icon}`}></i>
                    <span ref={cycleIndicatorRef} className={styles.cycle}>{`${currentCycle}/${props.maxCycleSetting}`}</span>
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
            handleFastBackward={handleFastBackward}
            isGoalCycleReached={isGoalCycleReached}
            handleResetButtonClicked={handleResetButtonClicked}/>
    </div>
)};

export default Timer;