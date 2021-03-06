import React from 'react';
import styles from './settingComponent.module.css';
const SettingComponent = (props) => {
    const title = props.component.title;
    const inputInfo = props.component.inputInfo;

    const handleSettingInputOnChange = (event, key) => {
        props.handleSettingInputOnChange(event, key);
    }

    return(
        <div className={styles.component}>
            <div className={styles.component_header}>
                <span>{title}</span>
            </div>
            <div className={styles.inputs_wrapper}>
                {
                    inputInfo.map(item => (
                        <label key={item.key}>
                            <input 
                            className={styles.input_box} 
                            type="number"
                            min={item.min} 
                            max={item.max} 
                            defaultValue={item.default}
                            onChange={(event) => {handleSettingInputOnChange(event, item.key)}}/>
                            <span>{item.subject}</span>
                        </label>
                        )
                    )
                }
            </div>
        </div>
    )};

export default SettingComponent;