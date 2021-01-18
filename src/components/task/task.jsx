import React, { useRef, useState } from 'react';
import styles from './task.module.css';

const Task = (props) => {
    const [name, setName] = useState(props.task.name);

    const checkboxRef = useRef();
    const nameRef = useRef();
    const toggleCheckbox = () => {
        if(checkboxRef.current.checked) {
            checkboxRef.current.checked = false;
        } else {
            checkboxRef.current.checked = true;
        }
    }
    const deleteTask = () => {
        props.deleteTask(props.task.key);
    }
    const editName = () => {
        nameRef.current.readOnly = false;
    }
    const handleOnKeyPress = () => {
        console.log("changed")
    }

    return (
        <div className={styles.task_wrapper}>
            <div className={styles.tick_and_subject}>
                <div className={styles.checkbox_container}>
                    <input ref={checkboxRef} onChange={() => {}} type="checkbox" className={styles.checkbox}/>
                    <span onClick={toggleCheckbox} className={styles.custom_checkbox}></span>
                </div>
                <input className={styles.name} ref={nameRef} type="text" value={name} readOnly/>
            </div>
            <div className={styles.buttons}>
                <div className={`${styles.button} ${styles.edit_button}`} onClick={editName}>
                    <i className="fas fa-edit"></i>
                </div>
                <div className={`${styles.button} ${styles.trash_button}`} onClick={deleteTask}>
                    <i className="fas fa-trash-alt"></i>
                </div>
            </div>
        </div>
    ); 
};

export default Task;