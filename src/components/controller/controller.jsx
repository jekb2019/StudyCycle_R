import {useState, forwardRef, useImperativeHandle} from 'react';
import styles from './controller.module.css';

const Controller = (props) => {
    const pauseButton = {
        name: 'pause',
        element: <div key="pause">
                    <i className={`fas fa-pause ${styles.primary_controller} ${styles.controller}`}></i>
                </div>
    }

    const playButton = {
        name: 'play',
        element: <div key="play">
                    <i className={`fas fa-play ${styles.primary_controller} ${styles.controller}`}></i>
                </div>
    }

    const resetButton = {
        name: 'reset',
        element: <div key="reset" onClick={props.handleResetButtonClicked}>
                    <i className={`fas fa-redo-alt ${styles.primary_controller} ${styles.controller}`}></i>
                </div>
    }

    const primaryControllerArray = [pauseButton, playButton, resetButton];

    return (
        <div className={styles.controllers}>
            <div className={styles.fast_backward}>
                <div 
                className={`${styles.button} ${styles.sub_controller_wrapper}`} 
                onClick={() => {props.handleClickSound(); props.handleFastBackward();}}>
                    <i className={`fas fa-backward ${styles.sub_controller} ${styles.controller}`}></i>
                </div>
                <span>- 3 min</span>
            </div>
            <div 
            className={styles.button} 
            onClick={() => {props.handleTimerRunningStatus(); props.handleClickSound();}}>
                {
                    primaryControllerArray.map((item) => {
                        if(props.isGoalCycleReached && item.name === 'reset') {
                            return item.element;
                        }
                        if(!props.isGoalCycleReached && props.isClockRunning && item.name === 'pause') {
                            return item.element;
                        } 
                        if(!props.isGoalCycleReached && !props.isClockRunning && item.name === 'play') {
                            return item.element;
                        }
                    })
                }
            </div>
            <div className={styles.fast_forward}>
                <div 
                className={`${styles.button} ${styles.sub_controller_wrapper}`}
                onClick={() => {props.handleClickSound(); props.handleFastForward();}}>
                    <i className={`fas fa-forward ${styles.sub_controller} ${styles.controller}`}></i>
                </div>
                <span>+ 3 min</span>
            </div>
        </div>
    )};

export default Controller;