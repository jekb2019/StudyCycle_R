import React from 'react';
import styles from './settingComponent.module.css';
const SettingComponent = (props) => {
    
    
    const handleOnChange = (event, key) => {
        props.handleSettingInputChange(event, key);
    }

    return(
    <div className={styles.component}>
        <div className={styles.component_header}>
            <span>{props.title}</span>
        </div>
        <div className={styles.inputs_wrapper}>
            {
                props.inputs.map(item => 
                    <label key={item.key}>
                        <input className={styles.input_box} 
                        type="number" min={item.min} max={item.max} defaultValue={item.initial}
                        onChange={(event) => {handleOnChange(event, item.key)}}/>
                        <span>{item.subject}</span>
                    </label>
                )
            }
        </div>
    </div>
    )};

export default SettingComponent;