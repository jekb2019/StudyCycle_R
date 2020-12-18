import React from 'react';
import styles from './settingComponent.module.css';
const SettingComponent = ({title, inputs, toggle, handleClickSound}) => (
    <div className={styles.component}>
        <div className={styles.component_header}>
            <span>{title}</span>
            {toggle && <div className={styles.toggle_button} onClick={handleClickSound}>Disable</div>}
        </div>
        <div className={styles.inputs_wrapper}>
            {
                inputs.map(item => 
                    <label key={item.subjectName}>
                        <input className={styles.input_box} type="number" min={item.min} max={item.max} value={item.initial}/>
                        <span>{item.subjectName}</span>
                    </label>
                    )
            }
        </div>
    </div>
    );

export default SettingComponent;