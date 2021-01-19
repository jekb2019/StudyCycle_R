import React, { useEffect, useState } from 'react';
import TaskTracker from '../task_traker/taskTracker';
import styles from './taskTrackerWrapper.module.css';


const TaskTrackerWrapper = (props) => {
    const [isTaskTrackerOpen, setIsTaskTrackerOpen] = useState(true);
    const [tasks, setTasks] = useState(
        [
            {
                key: new Date().getTime(),
                name: 'Finish work',
                isDone: false,
            }
        ]
    );

    const setTaskIsDone = (key, isDone) => {
        const tempTasks = tasks.map(task => {
            if(task.key === key) {
                task.isDone = isDone;
                return task;
            }
            return task;
        });
        setTasks(tempTasks);
    }

    const changeTaskName = (key, name) => {
        const tempTasks = tasks.map(task => {
            if(task.key === key) {
                task.name = name;
                return task;
            }
            return task;
        });
        setTasks(tempTasks);
    };

    const createNewTask = (name) => {
        const tempTasks = tasks.map(task => {
            return task;
        });
        tempTasks.unshift({
            key: new Date().getTime(),
            name,
            isDone: false
        });
        setTasks(tempTasks);
    };

    const deleteTask = (key) => {
        const tempTasks = tasks.filter(task => task.key !== key);
        setTasks(tempTasks);
    };

    useEffect(() => {
        console.log(isTaskTrackerOpen)
    }, []);

    const handleToggleTaskTracker = () => {
        props.soundBox.playClickSound();
        isTaskTrackerOpen ? setIsTaskTrackerOpen(false) : setIsTaskTrackerOpen(true);
    };

    // Console debugger: Only used for development purposes
    // const debugTasks = () => {
    //     console.log(tasks);
    // }

    return(
        <div className={styles.wrapper}>
            {/* <button onClick={debugTasks}>DEBUG TASKS</button> */}
            <div className={styles.header}>
                <p className={styles.title}>Task Tracker</p>
                <div className={styles.button} onClick={handleToggleTaskTracker}>
                    {isTaskTrackerOpen && <div><i className={`${`fas fa-chevron-up`} ${styles.visibility_icon}`}></i></div>}
                    {!isTaskTrackerOpen && <div><i className={`${`fas fa-chevron-down`} ${styles.visibility_icon}`}></i></div>}
                </div>
            </div>
            <div className={styles.task_tracker_wrapper}>
                {isTaskTrackerOpen && <TaskTracker soundBox={props.soundBox} tasks={tasks} createNewTask={createNewTask} deleteTask={deleteTask} changeTaskName={changeTaskName} setTaskIsDone={setTaskIsDone}/>}
            </div>
        </div>
    );
};

export default TaskTrackerWrapper;