import React from 'react';
import styles from './settingWindow.module.css';

const SettingWindow = (props) => (
    <div className={styles.window}>
        <div className={styles.header}>
            <img className={styles.logo} src="/images/small-logo.png" alt="small logo"/>
            <h1>Settings</h1>
            <span className={styles.close_button}>X</span>
        </div>
        <div className={styles.setting_wrapper}>
            <span className={styles.subject}>Focus Time</span>

            <div className={styles.input_wrapper}>
                <label>
                    <input type="number" min="0" max="24" value="2"/>
                    Hours
                </label>
                <label>
                    <input type="number" min="0" max="59" value="0"/>
                    Minutes
                </label>
            </div>
        </div>
        <div className={styles.setting_wrapper}>
            <span className={styles.subject}>Break Time</span>
            <div className={styles.input_wrapper}>
                <label>
                    <input type="number" min="0" max="24" value="2"/>
                    Hours
                </label>
                <label>
                    <input type="number" min="0" max="59" value="0"/>
                    Minutes
                </label>
            </div>
        </div>
        <div className={styles.setting_wrapper}>
            <span className={styles.subject}>Goal Cycles</span>
            <div className={styles.input_wrapper}>
                <label>
                    <input min="1" type="number" value="5"/>
                    Cycles
                </label>
                <div className={styles.goal_set_button}>
                    <span>Disable</span>
                </div>
            </div>
        </div>
        <div className={styles.ok_button}>
            <span>OK</span>
        </div>
    </div>
);

export default SettingWindow;