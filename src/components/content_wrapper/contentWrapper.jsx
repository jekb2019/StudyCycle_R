import React, { useState } from 'react';
import TimerWrapper from '../timer_wrapper/timerWrapper';
import SettingWindow from '../setting_window/settingWindow';
import styles from './contentWrapper.module.css';

const ContentWrapper = (props) => {
    const [settingWindowOpen, setSettingWindowOpen] = useState(false);
    const [timerInitiated, setTimerInitiated] = useState(false);
    const [isTimerRunning, setIsTimerRunning] = useState(false);
    const [isGoalCycleFinished, setIsGoalCycleFinished] = useState(false);

    const handleSettingWindowToggle = () => {
        settingWindowOpen ? setSettingWindowOpen(false) : setSettingWindowOpen(true);
    }

    const handleTimerSetting = () => {
        // To be implemented for OK click in the setting window

        handleSettingWindowToggle();
    }

    const handleStartTimer = () => {
        setIsTimerRunning(true);
        if(!timerInitiated) {
            props.timerService.initiateTimer();
            setTimerInitiated(true);
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

    return (
        <div className={styles.content_wrapper}>
            <TimerWrapper
                soundBox={props.soundBox}
                handleSettingWindowToggle={handleSettingWindowToggle}
                timerService={props.timerService}
                handleStartTimer={handleStartTimer}
                handlePauseTimer={handlePauseTimer}
                isTimerRunning={isTimerRunning}
                isGoalCycleFinished={isGoalCycleFinished}/>
            {settingWindowOpen && 
                <SettingWindow 
                    soundBox={props.soundBox}
                    handleSettingWindowToggle={handleSettingWindowToggle}
                    handleTimerSetting={handleTimerSetting}/>
            }
        </div>
    );
};

export default ContentWrapper;