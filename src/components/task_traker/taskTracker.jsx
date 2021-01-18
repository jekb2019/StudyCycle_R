import React from 'react';
import styles from './taskTracker.module.css';

const TaskTracker = (props) => {

    const handleOnSubmit = event => {
        event.preventDefault();
        console.log("submitted")
    }

    return (
        <div className={styles.whole_wrapper}>
            <div className={styles.input_wrapper}>
                <form className={styles.input_form} onSubmit={handleOnSubmit}>
                    <input className={styles.input} type="text" placeholder="What do you need to work on?"></input>
                    <button className={styles.add_button}>
                        <i className={`fas fa-plus ${styles.add_icon}`}></i>
                    </button>
                </form>
            </div>
            <div className={styles.tasks_wrapper}>

            </div>
        </div>
    );
};

export default TaskTracker;