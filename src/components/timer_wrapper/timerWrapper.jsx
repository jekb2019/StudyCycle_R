import React from 'react';
import Timer from '../timer/timer';
import styles from './timerWrapper.module.css';


const TimerWrapper = (props) => {
    const handleStartTimer = () => {
        props.handleStartTimer();
    }

    const handlePauseTimer = () => {
        props.handlePauseTimer();
    }

    const handleSettingWindowToggle = () => {
        props.soundBox.playClickSound();
        props.handleSettingWindowToggle();
    }

    return(
        <div className={styles.wrapper}>
            <div className={styles.settings}>
                <span>
                    <div className={styles.small_description}>
                        <span>Focus</span>
                    </div> 
                    <span className={styles.settedTime_indicator}> {props.focusTimeHours} hr {props.focusTimeMinutes} min</span> 
                    <div className={styles.small_description}>
                        <span>Break</span>
                    </div>
                    <span className={styles.settedTime_indicator}> {props.breakTimeHours} hr {props.breakTimeMinutes} min</span> 
                    <div className={styles.small_description}>
                        <span>Cycles</span>
                    </div>
                    <span className={styles.settedTime_indicator}> {props.goalCycle}</span>

                </span>
                <div className={styles.button} onClick={handleSettingWindowToggle}>
                    <i className={`fas fa-cog ${styles.icon}`} id="setting-icon"></i>
                </div>
            </div>
            <Timer
                soundBox={props.soundBox} 
                timerService={props.timerService}
                handleStartTimer={handleStartTimer}
                handlePauseTimer={handlePauseTimer}
                isTimerRunning={props.isTimerRunning}
                isGoalCycleFinished={props.isGoalCycleFinished}
                handleResetTimer={props.handleResetTimer}
                handleFastForward={props.handleFastForward}
                handleFastBackward={props.handleFastBackward}
                currentTime={props.currentTime}
                currentTimerStatus={props.currentTimerStatus}
                goalCycle={props.goalCycle}
                currentCycle={props.currentCycle}/>
        </div>
    );     
};

export default TimerWrapper;