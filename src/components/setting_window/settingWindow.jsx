import React, {useState} from 'react';
import SettingComponent from '../setting_components/settingComponent';
import styles from './settingWindow.module.css';

const SettingWindow = (props) => {
    // const [focusHour, setFocusHour] = useState(props.service.getFocusTimeHour());
    // const [focusMin, setFocusMin] = useState(props.service.getFocusTimeMinute());
    // const [breakHour, setBreakHour] = useState(props.service.getBreakTimeHour());
    // const [breakMin, setBreakMin] = useState(props.service.getBreakTimeMinute());
    // const [maxCycle, setMaxCycle] = useState(props.service.getMaxCycle());
    
    const settingInputs = [
        {
            key: 'Focus Time',
            inputInfo: {
                hour: {subject: `Hours`, initial: focusHour, min: 0, max: 24},
                minute: {key: `fMinute`, subjectName: `Minutes`, initial: focusMin, min: 0, max: 59}
            }
        },
        {
            key: 'Break Time',
            inputInfo: {
                hour: {subject: `Hours`, initial: breakHour, min: 0, max: 24},
                minute: {key: `bMinute`, subjectName: `Minutes`, initial: breakMin, min: 0, max: 59}
            }
        },
        {
            key: 'Goal Cycles',
            inputInfo: {
                cycle: {subject: `Cycles`, initial: maxCycle, min: 0, max: 99}
            }
        }

    ]

    const [input, setInput] = useState({
            fHour: focusHour,
            fMinute: focusMin,
            bHour: breakHour,
            bMinute: breakMin,
            mCycle: maxCycle 
        }
    );

    const handleSettingWindowClose = () => {
        props.handleSettingWindowClose();
    };

    const handleSettingWindowOK = () => {
        setFocusHour(input.fHour);
        setFocusMin(input.fMinute);
        setBreakHour(input.bHour);
        setBreakMin(input.bMinute);
        setMaxCycle(input.mCycle);
        props.service.setFocusTime(input.fHour, input.fMinute);
        props.service.setBreakTime(input.bHour, input.bMinute);
        props.service.setGoalCycle(input.mCycle);
        props.handleSettingWindowOK();
    }

    const handleOnKeyPressEnter = (event) => {
        if(event.key === 'Enter') {
            handleSettingWindowOK();
        }
    }

    const handleSettingInputChange = (event, key) => {
        let tempInput = {...input};
        tempInput[key] = event.target.value;
        setInput(tempInput);
    }


    return (
    <div className={styles.window} onKeyPress={handleOnKeyPressEnter}>
        <div className={styles.header}>
            <img className={styles.logo} src="/images/small-logo.png" alt="Study Cycle small logo"/>
            <h1 className={styles.subject}>Settings</h1>
            <div className={styles.close_button} 
            onClick={() => {handleSettingWindowClose(); props.handleClickSound()}}>
                <i className={`fas fa-times ${styles.close_icon}`}></i>
            </div>
        </div>
        <div className={styles.components}>
            {
                settingInputs.map(item => (
                    <SettingComponent
                        key={item.key}
                        title={item.key}
                        inputInfo={item.inputs}
                        handleSettingInputChange={handleSettingInputChange}
                    />
                ))
            }
        </div>
        <button className={styles.ok_button}
        onClick={()=>{handleSettingWindowOK(); props.handleClickSound()}}>OK</button>
    </div>)
};

export default SettingWindow;