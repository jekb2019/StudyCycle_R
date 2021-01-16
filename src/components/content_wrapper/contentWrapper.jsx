import React, { useEffect, useState } from 'react';
import TimerWrapper from '../timer_wrapper/timerWrapper';
import SettingWindow from '../setting_window/settingWindow';
import styles from './contentWrapper.module.css';

// Enum for timer status
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
    const [currentCycle, setCurrentCycle] = useState(null);
    const [goalCycle, setGoalCycle] = useState(props.timerService.getGoalCycle());
    const [focusTimeHours, setFocusTimeHours] = useState(props.timerService.getFocusTimeHours());
    const [focusTimeMinutes, setFocusTimeMinutes] = useState(props.timerService.getFocusTimeMinutes());
    const [breakTimeHours, setBreakTimeHours] = useState(props.timerService.getBreakTimeHours());
    const [breakTimeMinutes, setBreakTimeMinutes] = useState(props.timerService.getBreakTimeMinutes());

    useEffect(() => {
        setCurrentTime(props.timerService.getFormattedCurrentTime());
        setCurrentTimerStatus(TimerStatus.NONE);
        setGoalCycle(props.timerService.getGoalCycle());
        setCurrentCycle(props.timerService.getCurrentCycle());
    }, [])

    useEffect(() => {
        if(currentTimerStatus === TimerStatus.FOCUS) {
            props.soundBox.playFocusStartSound();
        } else if(currentTimerStatus === TimerStatus.BREAK) {
            props.soundBox.playBreakStartSound();
        }
    }, [currentTimerStatus])

    useEffect(() => {
        if(isGoalCycleFinished) {
            props.soundBox.playGoalReachedSound();
            setIsTimerRunning(false);
            clearInterval(timerObject);
        }
    }, [isGoalCycleFinished])

    const handleSettingWindowToggle = () => {
        isSettingWindowOpen ? setIsSettingWindowOpen(false) : setIsSettingWindowOpen(true);
    }

    // Apply customized timer settings when 'OK' is clicked in setting window
    const handleTimerSetting = (focusHours, focusMinutes, breakHours, breakMinutes, goalCycle) => {
        handleSettingWindowToggle();
        const focusCheck = props.timerService.setFocusTime(focusHours, focusMinutes);
        props.timerService.setBreakTime(breakHours, breakMinutes);
        const goalCheck = props.timerService.setGoalCycle(goalCycle);
        if(!focusCheck && !goalCycle) {
            alert("Focus Time and Goal Cycle must be more than 1 minute!");
            return;
        } else {
            if(!focusCheck) {
                alert("Focus Time must be more than 1 minute!");
                return;
            }
            if(!goalCheck) {
                alert("Goal Cycles must be more than 1 minute!");
                return;
            }
        }
        setFocusTimeHours(focusHours);
        setFocusTimeMinutes(focusMinutes);
        setBreakTimeHours(breakHours);
        setBreakTimeMinutes(breakMinutes);
        setGoalCycle(goalCycle);
        return;
    }

    const handleStartTimer = () => {
        setIsTimerRunning(true);
        if(!isTimerInitiated) {
            props.timerService.initiateTimer();
            setIsTimerInitiated(true);
        } else {
            props.timerService.startTimer();
        }
        runUIUpdater();
    }

    const handlePauseTimer = () => {
        setIsTimerRunning(false);
        props.timerService.pauseTimer();
        clearInterval(timerObject);
    }

    const handleResetTimer = () => {
        props.timerService.resetTimer();
        setIsTimerInitiated(false);
        setIsTimerRunning(false);
        setIsGoalCycleFinished(false);
        setCurrentCycle(props.timerService.getCurrentCycle());
        clearInterval(timerObject);
        setCurrentTime(props.timerService.getFormattedCurrentTime());
        setCurrentTimerStatus(TimerStatus.NONE);
    }

    const handleFastForward = () => {
        props.timerService.fastForward(props.fastForwardTime);
    }

    const handleFastBackward = () => {
        props.timerService.fastBackward(props.fastBackwardTime);
    }

    // Update clock UI every 100ms
    const runUIUpdater = () => {
        const interval = 100;
        let expectedTime = Date.now() + interval;
        const start = () => {
            setTimerObject(setTimeout(round, interval));
        }
        const round = () => {
            let drift = Date.now() - expectedTime;
            work();
            expectedTime += interval;
                setTimerObject(setTimeout(round, interval - drift));
        }
        const work = () => {
            setCurrentTime(props.timerService.getFormattedCurrentTime());
            setIsGoalCycleFinished(props.timerService.isGoalReached());
            setCurrentTimerStatus(props.timerService.getCurrentTimerStatus());
            setCurrentCycle(props.timerService.getCurrentCycle());
        }
        start();
    }

    // Console debugger for states - only used for development purposes
    const debug = () => {
        console.log(`-----UI DEBUG-----`);
        console.log(`isTimerInitiated: ${isTimerInitiated}`);
        console.log(`isTimerRunning: ${isTimerRunning}`);
        console.log(`isGoalCycleFinished: ${isGoalCycleFinished}`);
        console.log(`currentTime: ${currentTime}`);
        console.log(`isSettingWindowOpen: ${isSettingWindowOpen}`);
        console.log(`currentTimerStatus: ${currentTimerStatus}`)
        console.log(`goalCycle: ${goalCycle}`);
        console.log(`currentCycle: ${currentCycle}`);
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
                currentTimerStatus={currentTimerStatus}
                goalCycle={goalCycle}
                currentCycle={currentCycle}
                focusTimeHours={focusTimeHours}
                focusTimeMinutes={focusTimeMinutes}
                breakTimeHours={breakTimeHours}
                breakTimeMinutes={breakTimeMinutes}/>
            {isSettingWindowOpen && 
                <SettingWindow 
                    timerService={props.timerService}
                    soundBox={props.soundBox}
                    handleSettingWindowToggle={handleSettingWindowToggle}
                    handleTimerSetting={handleTimerSetting}/>
            }
        </div>
    );
};

export default ContentWrapper;