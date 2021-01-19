import React, { useRef, useState, useEffect } from 'react';
import styles from './task.module.css';

const Task = (props) => {
    const [name, setName] = useState(props.task.name);
    const [isEditEnabled, setIsEditEnabled] = useState(false);
    const [isDone, setIsDone] = useState(props.task.isDone);

    const checkboxRef = useRef();
    const nameRef = useRef();
    const editRef = useRef();

    // Change edit button color when it is in edit mode
    useEffect(() => {
        isEditEnabled ? editRef.current.style.color = '#59B563' : editRef.current.style.color = '#808080'; 
    }, [isEditEnabled]);

    useEffect(() => {
        if(isDone) {
            checkboxRef.current.checked = true;
            props.setTaskIsDone(props.task.key, true);
        } else {
            checkboxRef.current.checked = false;
            props.setTaskIsDone(props.task.key, false);
        }
    }, [isDone]);

    const toggleCheckbox = () => {
        if(checkboxRef.current.checked) {
            checkboxRef.current.checked = false;
            setIsDone(false);
        } else {
            checkboxRef.current.checked = true;
            setIsDone(true);
        }
    }
    const deleteTask = () => {
        props.deleteTask(props.task.key);
    }

    const setEditMode = () => {
        nameRef.current.readOnly = false;
        setIsEditEnabled(true);
        nameRef.current.focus();
    }

    const disableEditMode = () => {
        nameRef.current.readOnly = true;
        setIsEditEnabled(false);
    }

    const editName = () => {
        if(isEditEnabled) {
            disableEditMode();
        } else {
            setEditMode();
        }
    }
    const handleOnInput = () => {
        if(isEditEnabled) {
            setName(nameRef.current.value);
            changeTaskName(props.task.key, nameRef.current.value);
        }
    }
    const handleOnBlur = () => {
        disableEditMode();
    }
    const handleOnKeyPressEnter = (event) => {
        if(event.key === 'Enter') {
            disableEditMode();
        }
    }
    const changeTaskName = (key, name) => {
        props.changeTaskName(key, name)
    }
    return (
        <div className={styles.task_wrapper}>
            <div className={styles.tick_and_subject}>
                <div className={styles.checkbox_container}>
                    <input ref={checkboxRef} onChange={() => {}} type="checkbox" className={styles.checkbox}/>
                    <span onClick={toggleCheckbox} className={styles.custom_checkbox}></span>
                </div>
                <input className={styles.name} ref={nameRef} type="text" defaultValue={name} readOnly onInput={handleOnInput} onBlur={handleOnBlur} onKeyPress={handleOnKeyPressEnter}/>
            </div>
            <div className={styles.buttons}>
                <div ref={editRef} className={`${styles.button} ${styles.edit_button}`} onClick={editName}>
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