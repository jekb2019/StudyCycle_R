import React, { useEffect, useRef } from 'react';
import Clock from '../clock/clock';
import Controller from '../controller/controller';
import styles from './timer.module.css';

const Timer = (props) => {
    const focusIndicatorRef = useRef();
    const breakIndicatorRef = useRef();
    const cycleIndicatorRef = useRef();

    const handleStartTimer = () => {
        props.handleStartTimer();
    }
    const handlePauseTimer = () => {
        props.handlePauseTimer();
    }
    const handleResetTimer = () => {
        props.soundBox.playClickSound();
        props.handleResetTimer();
    }
    useEffect(() => {
        if(props.currentTimerStatus === 'focus') {
            focusIndicatorRef.current.style.opacity = "1";
            breakIndicatorRef.current.style.opacity = "0.3";
        } else if(props.currentTimerStatus === 'break') {
            focusIndicatorRef.current.style.opacity = "0.3";
            breakIndicatorRef.current.style.opacity = "1";
        } else if(props.currentTimerStatus === 'none') {
            focusIndicatorRef.current.style.opacity = "0.3";
            breakIndicatorRef.current.style.opacity = "0.3";
        }
    }, [props.currentTimerStatus]);

    // Change cycle description UI color when goal is reached
    
    useEffect(() => {
        if(props.isGoalCycleFinished) {
            cycleIndicatorRef.current.style.color = "#DBA55D";
        } else {
            console.log(cycleIndicatorRef.current)
            cycleIndicatorRef.current.style.color = "#808080";
        }
    }, [props.isGoalCycleFinished]);

    return(
        <div className={styles.timer}>
            <div className={styles.indicators}>
                <div ref={focusIndicatorRef} className={`${styles.indicator} ${styles.focusIndicator}`}>
                    <span>Focus</span>
                </div>
                <div className={styles.status} ref={cycleIndicatorRef}>
                    <div>
                        <i className={`fas fa-biking ${styles.cycle_icon}`}></i>
                        <span className={styles.cycle}>{`${props.currentCycle}/${props.goalCycle}`}</span>
                    </div>
                </div>
                <div ref={breakIndicatorRef} className={`${styles.indicator} ${styles.breakIndicator}`}>
                    <span>Break</span>
                </div>
            </div>
            <div className={styles.clock_display}>
                <Clock className={styles.clock} currentTime={props.currentTime}/>
                <div className={styles.button} onClick={handleResetTimer}>
                    <i className={`fas fa-redo-alt ${styles.reset_icon}`}></i>
                </div>
            </div>

            <Controller
                soundBox={props.soundBox}
                handleStartTimer={handleStartTimer}
                handlePauseTimer={handlePauseTimer}
                isTimerRunning={props.isTimerRunning}
                isGoalCycleFinished={props.isGoalCycleFinished}
                handleResetTimer={props.handleResetTimer}
                handleFastForward={props.handleFastForward}
                handleFastBackward={props.handleFastBackward}/>
        </div>
    )
};

export default Timer;