import React, { useState } from 'react';
import TimerWrapper from '../timer_wrapper/timerWrapper';
import SettingWindow from '../setting_window/settingWindow';
import styles from './contentWrapper.module.css';

const ContentWrapper = (props) => {
    const [settingWindowOpen, setSettingWindowOpen] = useState(false);
    const [timerInitiated, setTimerInitiated] = useState(false);

    const handleSettingWindowToggle = () => {
        props.soundBox.makeClickSound();
        settingWindowOpen ? setSettingWindowOpen(false) : setSettingWindowOpen(true);
    }

    const handleTimerSetting = () => {
        props.soundBox.makeClickSound();
        // To be implemented for OK click in the setting window

        handleSettingWindowToggle();
    }

    const handleStartTimer = () => {
        if(!timerInitiated) {
            props.timerService.initiateTimer();
            setTimerInitiated(true);
        } else {
            // To DO: Implement
            console.log("Timer already running")
        }
    }

    return (
        <div className={styles.content_wrapper}>
            <TimerWrapper
                handleSettingWindowToggle={handleSettingWindowToggle}
                timerService={props.timerService}
                handleStartTimer={handleStartTimer}/>
            {settingWindowOpen && 
                <SettingWindow 
                    handleSettingWindowToggle={handleSettingWindowToggle}
                    handleTimerSetting={handleTimerSetting}/>
            }
        </div>
    );
};

export default ContentWrapper;