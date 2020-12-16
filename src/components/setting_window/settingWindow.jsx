import React from 'react';
import styles from './settingWindow.module.css';

const SettingWindow = (props) => (
    <div className={styles.window}>
        <div className={styles.header}>
            <img className={styles.logo} src="/images/small-logo.png" alt="small logo"/>
            <h1>Settings</h1>
            <span className={styles.close_button}>X</span>
        </div>
        <div className={styles.components}>
            <div className={styles.component}>
                <div className={styles.component_header}></div>
                <div>
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
                <div className={styles.component_header}></div>
                <div>
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
                <div className={styles.component_header}></div>
                <div>
                    <label>
                        <input className={styles.input_box} min="1" type="number" value="5"/>
                        <span>Cycles</span>
                    </label>
                </div>
            </div>
        </div>
        <button>OK</button>
    </div>
);

export default SettingWindow;