import React from 'react';
import SettingComponent from '../setting_components/settingComponent';
import styles from './settingWindow.module.css';

const SettingWindow = (props) => {    
    const settingInputs = [
        {
            title: 'Focus Time',
            inputInfo: [
                {
                    subject: `Hours`, 
                    default: 1, 
                    min: 0, 
                    max: 24
                },
                {
                    subject: `Minutes`,
                    default: 10, 
                    min: 0,
                    max: 59
                }
            ]
        },
        {
            title: 'Break Time',
            inputInfo: [
                {
                    subject: `Hours`, 
                    default: 0, 
                    min: 0, 
                    max: 24
                },
                {
                    subject: `Minutes`, 
                    default: 10,
                    min: 0, 
                    max: 59
                }
            ]
        },
        {
            title: 'Goal Cycles',
            inputInfo: [
                {
                    subject: `Cycles`, 
                    default: 5, 
                    min: 0, 
                    max: 99
                }
            ]
        }

    ]

    const handleSettingWindowToggle = () => {
        props.soundBox.playClickSound();
        props.handleSettingWindowToggle()
    }

    const handleTimerSetting = () => {
        props.soundBox.playClickSound();
        props.handleTimerSetting()
    }

    return (
    <div className={styles.window}>
        <div className={styles.header}>
            <img className={styles.logo} src="/images/small-logo.png" alt="Study Cycle small logo"/>
            <h1 className={styles.subject}>Settings</h1>
            <div className={styles.close_button} onClick={handleSettingWindowToggle}>
                <i className={`fas fa-times ${styles.close_icon}`}></i>
            </div>
        </div>
        <div className={styles.components}>
            {
                settingInputs.map(item => (
                    <SettingComponent
                        key={item.title}
                        component={item}
                    />
                ))
            }
        </div>
        <button className={styles.ok_button} onClick={handleTimerSetting}>OK</button>
    </div>)
};

export default SettingWindow;