import React from 'react';
import styles from './settingWindow.module.css';

const SettingWindow = (props) => (
    <div className={styles.window}>
        <div className={styles.header}>
            <img className={styles.logo} src="/images/small-logo.png" alt="small logo"/>
            <h1 className={styles.subject}>Settings</h1>
            <div className={styles.close_button}>
                <i className={`fas fa-times ${styles.close_icon}`}></i>
            </div>
        </div>
        <div className={styles.components}>
            <div className={styles.component}>
                <div className={styles.component_header}>
                    <span>Focus Time</span>
                </div>
                <div className={styles.inputs_wrapper}>
                    <label>
                        <input className={styles.input_box} type="number" min="0" max="24" value="2"/>
                        <span>Hours</span>
                    </label>
                    <label>
                        <input className={styles.input_box} type="number" min="0" max="59" value="0"/>
                        <span>Minutes</span>
                    </label>
                </div>
            </div>
            <div className={styles.component}>
                <div className={styles.component_header}>
                    <span>Break Time</span>
                </div>
                <div className={styles.inputs_wrapper}>
                    <label>
                        <input className={styles.input_box} type="number" min="0" max="24" value="2"/>
                        <span>Hours</span>
                    </label>
                    <label>
                        <input className={styles.input_box} type="number" min="0" max="59" value="0"/>
                        <span>Minutes</span>
                    </label>
                </div>
            </div>
            <div className={styles.component}>
                <div className={styles.component_header}>
                    <span>Goal Cycles</span>
                </div>
                <div className={styles.inputs_wrapper}>
                    <label>
                        <input className={styles.input_box} min="1" type="number" value="5"/>
                        <span>Cycles</span>
                    </label>
                </div>
            </div>
        </div>
        <button className={styles.ok_button}>OK</button>
    </div>
);

export default SettingWindow;