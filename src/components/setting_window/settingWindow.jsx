import React, { useState } from 'react';
import SettingComponent from '../setting_components/settingComponent';
import styles from './settingWindow.module.css';

const SettingWindow = (props) => {
    // List of customizable setting inputs
    const settingInputs = [
        {
            title: 'Focus Time',
            inputInfo: [
                {
                    key: 'Focus Hours',
                    subject: 'Hours', 
                    default: props.timerService.getFocusTimeHours(), 
                    min: 0, 
                    max: 24
                },
                {
                    key: 'Focus Minutes',
                    subject: 'Minutes',
                    default: props.timerService.getFocusTimeMinutes(), 
                    min: 0,
                    max: 59
                }
            ]
        },
        {
            title: 'Break Time',
            inputInfo: [
                {
                    key: 'Break Hours',
                    subject: 'Hours', 
                    default: props.timerService.getBreakTimeHours(), 
                    min: 0, 
                    max: 24,
                },
                {
                    key: 'Break Minutes',
                    subject: 'Minutes', 
                    default: props.timerService.getBreakTimeMinutes(),
                    min: 0, 
                    max: 59
                }
            ]
        },
        {
            title: 'Goal Cycles',
            inputInfo: [
                {
                    key: 'Goal Cycle',
                    subject: 'Cycles', 
                    default: props.timerService.getGoalCycle(), 
                    min: 1, 
                    max: 99
                }
            ]
        }

    ]

    // States holding currently input setting values (without 'OK' button clicked) 
    const [focusTimeHoursInput, setFocusTimeHoursInput] = useState(settingInputs[0].inputInfo[0].default);
    const [focusTimeMinutesInput, setFocusTimeMinutesInput] = useState(settingInputs[0].inputInfo[1].default);
    const [breakTimeHoursInput, setBreakTimeHoursInput] = useState(settingInputs[1].inputInfo[0].default);
    const [breakTimeMinutesInput, setBreakTimeMinutesInput] = useState(settingInputs[1].inputInfo[1].default);
    const [goalCycleInput, setGoalCycleInput] = useState(settingInputs[2].inputInfo[0].default);

    // make default inputs as current timer settings
    useState(() => {
        setFocusTimeHoursInput(props.timerService.getFocusTimeHours());
        setFocusTimeMinutesInput(props.timerService.getFocusTimeMinutes());
        setBreakTimeHoursInput(props.timerService.getBreakTimeHours());
        setBreakTimeMinutesInput(props.timerService.getBreakTimeMinutes());
        setGoalCycleInput(props.timerService.getGoalCycle());
    }, [])

    const handleSettingWindowToggle = () => {
        props.soundBox.playClickSound();
        props.handleSettingWindowToggle()
    }

    // Apply timer setting when 'OK' button is clicked
    const handleTimerSetting = () => {
        props.soundBox.playClickSound();
        props.handleTimerSetting(focusTimeHoursInput, focusTimeMinutesInput, breakTimeHoursInput, breakTimeMinutesInput, goalCycleInput);
    }

    // Update input states every time current input is changed (without 'OK' button clicked)
    const handleSettingInputOnChange = (event, key) => {
        const value = parseInt(event.target.value);
        switch (key) {
            case 'Focus Hours':
                setFocusTimeHoursInput(value);
                break;
            case 'Focus Minutes':
                setFocusTimeMinutesInput(value);
                break;
            case 'Break Hours':
                setBreakTimeHoursInput(value);
                break;
            case 'Break Minutes':
                setBreakTimeMinutesInput(value);
                break;
            case 'Goal Cycle':
                setGoalCycleInput(value);
                break;
            default:
                console.log('Error: invalid input');
        }
    }

    const handleOnKeyPressEnter = (event) => {
        if(event.key === 'Enter') {
            handleTimerSetting();
        }
    }

    return (
        <div className={styles.window} onKeyPress={handleOnKeyPressEnter}>
            <div className={styles.content_wrapper}>
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
                                handleSettingInputOnChange={handleSettingInputOnChange}
                            />
                        ))
                    }
                </div>
            </div>
            <button className={styles.ok_button} onClick={handleTimerSetting}>OK</button>
        </div>
    )
};

export default SettingWindow;