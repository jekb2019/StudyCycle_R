import React, { useEffect, useState } from 'react';
import TimerWrapper from '../timer_wrapper/timerWrapper';
import SettingWindow from '../setting_window/settingWindow';
import styles from './contentWrapper.module.css';

const TimerStatus = {
    NONE: 'none',
    FOCUS: 'focus',
    BREAK: 'break'
}

const ContentWrapper = (props) => {
    const [isSettingWindowOpen, setIsSettingWindowOpen] = useState(false);
    const [isTimerInitiated, setIsTimerInitiated] = useState(false);
    const [isTimerRunning, setIsTimerRunning] = useState(false);
    const [isGoalCycleFinished, setIsGoalCycleFinished] = useState(false);
    const [currentTime, setCurrentTime] = useState(`00:00:00`);
    const [timerObject, setTimerObject] = useState(null);
    const [currentTimerStatus, setCurrentTimerStatus] = useState(null);

    useEffect(() => {
        setCurrentTime(props.timerService.getFormattedCurrentTime());
        setCurrentTimerStatus(TimerStatus.NONE);
    }, [])

    useEffect(() => {
        if(currentTimerStatus === TimerStatus.FOCUS) {
            props.soundBox.makeFocusStartSound();
        } else if(currentTimerStatus === TimerStatus.BREAK) {
            props.soundBox.makeBreakStartSound();
        }
    }, [currentTimerStatus])

    useEffect(() => {
        if(isGoalCycleFinished) {
            setIsTimerRunning(false);
            clearInterval(timerObject);
        }
    }, [isGoalCycleFinished])

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
            props.timerService.startTimer();
        }

        setTimerObject(getUIUpdater());
    }

    const handlePauseTimer = () => {
        // TO DO: implement
        setIsTimerRunning(false);
        props.timerService.pauseTimer();
        clearInterval(timerObject);
    }

    const handleResetTimer = () => {
        setIsTimerInitiated(false);
        props.timerService.resetTimer();
        setIsTimerRunning(false);
        setIsGoalCycleFinished(false);
        clearInterval(timerObject);
        setCurrentTime(props.timerService.getFormattedCurrentTime());
    }

    const handleFastForward = () => {
        // set to 3 minutes
        props.timerService.fastForward(3);
    }

    const handleFastBackward = () => {
        // set to 3 minutes
        props.timerService.fastBackward(3);
    }

    const getUIUpdater = () => {
        return setInterval(() => {
            console.log("UI")
            setCurrentTime(props.timerService.getFormattedCurrentTime());
            setIsGoalCycleFinished(props.timerService.isGoalReached());
            setCurrentTimerStatus(props.timerService.getCurrentTimerStatus())
        }, 100);
    }

    const debug = () => {
        console.log(`-----UI DEBUG-----`)
        console.log(`isTimerInitiated: ${isTimerInitiated}`);
        console.log(`isTimerRunning: ${isTimerRunning}`);
        console.log(`isGoalCycleFinished: ${isGoalCycleFinished}`);
        console.log(`currentTime: ${currentTime}`);
        console.log(`isSettingWindowOpen: ${isSettingWindowOpen}`);
        console.log(`currentTimerStatus: ${currentTimerStatus}`)
        console.log(`\n`)
    }

    return (
        <div className={styles.content_wrapper}>
            <button onClick={debug}>UI DEBUG</button>
            <TimerWrapper
                soundBox={props.soundBox}
                handleSettingWindowToggle={handleSettingWindowToggle}
                timerService={props.timerService}
                handleStartTimer={handleStartTimer}
                handlePauseTimer={handlePauseTimer}
                isTimerRunning={isTimerRunning}
                isGoalCycleFinished={isGoalCycleFinished}
                handleResetTimer={handleResetTimer}
                handleFastForward={handleFastForward}
                handleFastBackward={handleFastBackward}
                currentTime={currentTime}
                currentTimerStatus={currentTimerStatus}/>
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