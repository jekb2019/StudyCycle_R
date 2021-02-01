import React, { useState } from 'react';
import TaskTracker from '../task_traker/taskTracker';
import styles from './taskTrackerWrapper.module.css';

const TaskTrackerWrapper = (props) => {
    const [isTaskTrackerOpen, setIsTaskTrackerOpen] = useState(true);
    const [tasks, setTasks] = useState(props.taskTrackerService.getAllTasks());

    const setTaskIsDone = (key) => {
        const tempTasks = tasks.map(task => {
            if(task.key === key) {
                task.setIsDone();
                return task;
            }
            return task;
        });
        setTasks(tempTasks);
    };

    const unsetTaskIsDone = (key) => {
        const tempTasks = tasks.map(task => {
            if(task.key === key) {
                task.unsetIsDone();
                return task;
            }
            return task;
        });
        setTasks(tempTasks);
    }

    const changeTaskName = (key, name) => {
        props.taskTrackerService.editName(key, name);
        const tempTasks = props.taskTrackerService.getAllTasks().map(task => {
            return task;
        });
        setTasks(tempTasks);
    };

    const createNewTask = (name) => {
        props.taskTrackerService.addTask(name);
        const tempTasks = props.taskTrackerService.getAllTasks().map(task => {
            return task;
        });
        setTasks(tempTasks);
    };

    const deleteTask = (key) => {
        props.taskTrackerService.deleteTask(key);
        const tempTasks = props.taskTrackerService.getAllTasks().map(task => {
            return task;
        });
        setTasks(tempTasks);
    };

    const handleToggleTaskTracker = () => {
        props.soundBox.playClickSound();
        isTaskTrackerOpen ? setIsTaskTrackerOpen(false) : setIsTaskTrackerOpen(true);
    };

    // Console debugger: Only used for development purposes
    // const debugTasks = () => {
    //     console.log('State debugger',tasks);
    //     console.log('Service debugger', props.taskTrackerService.debug());
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
                {isTaskTrackerOpen && <TaskTracker 
                    taskTrackerService={props.taskTrackerService}
                    soundBox={props.soundBox} 
                    tasks={tasks} 
                    createNewTask={createNewTask} 
                    deleteTask={deleteTask} 
                    changeTaskName={changeTaskName} 
                    setTaskIsDone={setTaskIsDone} 
                    unsetTaskIsDone={unsetTaskIsDone}/>}
            </div>
        </div>
    );
};

export default TaskTrackerWrapper;