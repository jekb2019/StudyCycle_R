import React, { useState } from 'react';
import TimerWrapper from '../timer_wrapper/timerWrapper';
import SettingWindow from '../setting_window/settingWindow';
import styles from './contentWrapper.module.css';

const ContentWrapper = (props) => {
    return (
        <div className={styles.content_wrapper}>
            <TimerWrapper/>
            <SettingWindow/>
            {/* {settingWindowOpen && 
                <SettingWindow
                    service={props.service}
                    handleClickSound={props.soundBox.makeClickSound}
                    handleSettingWindowClose={handleSettingWindowClose}
                    handleSettingWindowOK={handleSettingWindowOK}/>
            } */}
        </div>
    );
};

export default ContentWrapper;