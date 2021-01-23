import React from 'react';
import SettingWindow from '../setting_window/settingWindow';
import styles from './settingWindowWrapper.module.css';

const SettingWindowWrapper = (props) => (
    <div className={styles.setting_windwo_wrapper}>
        <SettingWindow
            timerService={props.timerService}
            soundBox={props.soundBox}
            handleSettingWindowToggle={props.handleSettingWindowToggle}
            handleTimerSetting={props.handleTimerSetting}/>   
    </div>
    );

export default SettingWindowWrapper;