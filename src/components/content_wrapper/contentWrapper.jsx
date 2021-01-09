import React, { useState } from 'react';
import TimerWrapper from '../timer_wrapper/timerWrapper';
import SettingWindow from '../setting_window/settingWindow';
import styles from './contentWrapper.module.css';

const ContentWrapper = (props) => {
    const [settingWindowOpen, setSettingWindowOpen] = useState(false);

    const handleSettingWindowToggle = () => {
        props.soundBox.makeClickSound();
        settingWindowOpen ? setSettingWindowOpen(false) : setSettingWindowOpen(true);
    }

    const handleTimerSetting = () => {
        props.soundBox.makeClickSound();
        // To be implemented for OK click in the setting window

        handleSettingWindowToggle();
    }

    return (
        <div className={styles.content_wrapper}>
            <TimerWrapper handleSettingWindowToggle={handleSettingWindowToggle}/>
            {settingWindowOpen && 
                <SettingWindow 
                    handleSettingWindowToggle={handleSettingWindowToggle}
                    handleTimerSetting={handleTimerSetting}/>
            }
        </div>
    );
};

export default ContentWrapper;