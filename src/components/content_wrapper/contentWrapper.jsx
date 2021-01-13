import React, { useState } from 'react';
import TimerWrapper from '../timer_wrapper/timerWrapper';
import SettingWindow from '../setting_window/settingWindow';
import styles from './contentWrapper.module.css';

const ContentWrapper = (props) => {
    const [isSettingWindowOpen, setIsSettingWindowOpen] = useState(false);
    const [isTimerInitiated, setIsTimerInitiated] = useState(false);
    const [isTimerRunning, setIsTimerRunning] = useState(false);
    const [isGoalCycleFinished, setIsGoalCycleFinished] = useState(false);

    const handleSettingWindowToggle = () => {
        isSettingWindowOpen ? setIsSettingWindowOpen(false) : setIsSettingWindowOpen(true);
    }

    const handleTimerSetting = () => {
        // To be implemented for OK click in the setting window

        handleSettingWindowToggle();
    }

    const handleStartTimer = () => {
        setIsTimerRunning(true);
        if(!isTimerInitiated) {
            props.timerService.initiateTimer();
            setIsTimerInitiated(true);
        } else {
            // To DO: Implement
            console.log("Timer already running")

            props.timerService.startTimer();
        }
    }

    const handlePauseTimer = () => {
        // TO DO: implement
        setIsTimerRunning(false);
        props.timerService.pauseTimer();
    }

    const handleResetTimer = () => {
        setIsTimerInitiated(false);
    }

    return (
        <div className={styles.content_wrapper}>
            <TimerWrapper
                soundBox={props.soundBox}
                handleSettingWindowToggle={handleSettingWindowToggle}
                timerService={props.timerService}
                handleStartTimer={handleStartTimer}
                handlePauseTimer={handlePauseTimer}
                isTimerRunning={isTimerRunning}
                isGoalCycleFinished={isGoalCycleFinished}
                handleResetTimer={handleResetTimer}/>
            {isSettingWindowOpen && 
                <SettingWindow 
                    soundBox={props.soundBox}
                    handleSettingWindowToggle={handleSettingWindowToggle}
                    handleTimerSetting={handleTimerSetting}/>
            }
        </div>
    );
};

export default ContentWrapper;