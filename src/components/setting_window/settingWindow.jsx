import React from 'react';
import SettingComponent from '../setting_components/settingComponent';
import styles from './settingWindow.module.css';

const SettingWindow = (props) => {

    const handleSettingWindowClose = () => {
        props.handleSettingWindowClose();
    };

    const handleSettingWindowOK = () => {
        props.handleSettingWindowOK();
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
            inputs={[{subjectName: `Hours`, initial: 2, min: 0, max: 24},
            {subjectName: `Minutes`, initial: 0, min: 59}]}
            toggle={false}/>

            <SettingComponent 
            title={`Break Time`} 
            inputs={[{subjectName: `Hours`, initial: 2, min: 0, max: 24},
            {subjectName: `Minutes`, initial: 0, min: 59}]}
            toggle={false}/>
            
            <SettingComponent 
            handleClickSound={props.handleClickSound}
            title={`Goal Cycles`} 
            inputs={[{subjectName: `Cycles`, initial: 2, min: 0, max: 99}]}
            toggle={true}/>
        </div>
        <button className={styles.ok_button} 
        onClick={()=>{handleSettingWindowOK(); props.handleClickSound()}}>OK</button>
    </div>)
};

export default SettingWindow;