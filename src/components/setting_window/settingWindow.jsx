import React, {useState} from 'react';
import SettingComponent from '../setting_components/settingComponent';
import styles from './settingWindow.module.css';

const SettingWindow = (props) => {
    const [focusHour, setFocusHour] = useState(props.service.getFocusTimeHour());
    const [focusMin, setFocusMin] = useState(props.service.getFocusTimeMinute());
    const [breakHour, setBreakHour] = useState(props.service.getBreakTimeHour());
    const [breakMin, setBreakMin] = useState(props.service.getBreakTimeMinute());
    const [maxCycle, setMaxCycle] = useState(props.service.getMaxCycle());
    
    const focusInitial = {
        hour: {key: `fHour`, subjectName: `Hours`, initial: focusHour, min: 0, max: 24},
        minute: {key: `fMinute`, subjectName: `Minutes`, initial: focusMin, min: 0, max: 59}
    }

    const breakInitial = {
        hour: {key: `bHour`, subjectName: `Hours`, initial: breakHour, min: 0, max: 24},
        minute: {key: `bMinute`, subjectName: `Minutes`, initial: breakMin, min: 0, max: 59}
    }

    const maxCycleInitial = {
        cycle: {key: `mCycle`, subjectName: `Cycles`, initial: maxCycle, min: 0, max: 99}
    }

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
        // console.log(input);
    }

    const handleSettingInputOnChange = (event, key) => {
        let tempInput = {...input};
        tempInput[key] = event.target.value;
        setInput(tempInput);
    }


    return (<div className={styles.window}>
        <div className={styles.header}>
            <img className={styles.logo} src="/images/small-logo.png" alt="small logo"/>
            <h1 className={styles.subject}>Settings</h1>
            <div className={styles.close_button} 
            onClick={() => {handleSettingWindowClose(); props.handleClickSound()}}>
                <i className={`fas fa-times ${styles.close_icon}`}></i>
            </div>
        </div>
        <div className={styles.components}>
            <SettingComponent 
            title={`Focus Time`} 
            inputs={[focusInitial.hour, focusInitial.minute]}
            toggle={false}
            handleSettingInputOnChange={handleSettingInputOnChange}/>

            <SettingComponent 
            title={`Break Time`} 
            inputs={[breakInitial.hour, breakInitial.minute]}
            toggle={false}
            handleSettingInputOnChange={handleSettingInputOnChange}/>
            
            <SettingComponent 
            handleClickSound={props.handleClickSound}
            title={`Goal Cycles`} 
            inputs={[maxCycleInitial.cycle]}
            toggle={true}
            handleSettingInputOnChange={handleSettingInputOnChange}/>
        </div>
        <button className={styles.ok_button} 
        onClick={()=>{handleSettingWindowOK(); props.handleClickSound()}}>OK</button>
    </div>)
};

export default SettingWindow;