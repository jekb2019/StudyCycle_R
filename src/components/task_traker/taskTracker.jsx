import React, { useRef } from 'react';
import Task from '../task/task';
import styles from './taskTracker.module.css';

const TaskTracker = (props) => {
    const inputRef = useRef();

    const handleOnSubmit = event => {
        event.preventDefault();
        props.soundBox.playClickSound();
        if(inputRef.current.value) {
            props.createNewTask(inputRef.current.value);
        }
        inputRef.current.value = '';
    };

    return (
        <div className={styles.whole_wrapper}>
            <div className={styles.input_wrapper}>
                <form className={styles.input_form} onSubmit={handleOnSubmit}>
                    <input ref={inputRef} className={styles.input} type="text" placeholder="What do you need to work on?"></input>
                    <button className={styles.add_button}>
                        <i className={`fas fa-plus ${styles.add_icon}`}></i>
                    </button>
                </form>
            </div>
            <div className={styles.tasks_wrapper}>
                {props.tasks.map((task) => {
                    return <Task key={task.key} task={task} deleteTask={props.deleteTask} changeTaskName={props.changeTaskName} setTaskIsDone={props.setTaskIsDone}/>;
                })}
            </div>
        </div>
    );
};

export default TaskTracker;