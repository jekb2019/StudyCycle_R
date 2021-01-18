import React, { useEffect, useState } from 'react';
import TaskTracker from '../task_traker/taskTracker';
import styles from './taskTrackerWrapper.module.css';


const TaskTrackerWrapper = (props) => {

    const [isTaskTrackerOpen, setIsTaskTrackerOpen] = useState(true);

    useEffect(() => {
        console.log(isTaskTrackerOpen)
    }, [])

    const handleToggleTaskTracker = () => {
        isTaskTrackerOpen ? setIsTaskTrackerOpen(false) : setIsTaskTrackerOpen(true);
    }

    return(
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <p className={styles.title}>Task Tracker</p>
                <div className={styles.button} onClick={handleToggleTaskTracker}>
                    {isTaskTrackerOpen && <div><i className={`${`fas fa-chevron-up`} ${styles.visibility_icon}`}></i></div>}
                    {!isTaskTrackerOpen && <div><i className={`${`fas fa-chevron-down`} ${styles.visibility_icon}`}></i></div>}
                </div>
            </div>
            <div className={styles.task_tracker_wrapper}>
                {isTaskTrackerOpen && <TaskTracker/>}
            </div>
        </div>
    );
};

export default TaskTrackerWrapper;