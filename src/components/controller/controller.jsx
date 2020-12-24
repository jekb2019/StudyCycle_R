import {useState, forwardRef, useImperativeHandle} from 'react';
import styles from './controller.module.css';

const Controller = (props) => {

    return (
        <div className={styles.controllers}>
            <div className={styles.fast_backward}>
                <div 
                className={`${styles.button} ${styles.sub_controller_wrapper}`} 
                onClick={() => {props.handleClickSound(); props.handleFastBackward();}}>
                    <i className={`fas fa-backward ${styles.sub_controller} ${styles.controller}`}></i>
                </div>
                <span>-10s</span>
            </div>
            <div 
            className={styles.button} 
            onClick={() => {props.handleTimerRunningStatus(); props.handleClickSound();}}>
                {
                props.isClockRunning ?
                <div key="pause">
                    <i className={`fas fa-pause ${styles.primary_controller} ${styles.controller}`}></i>
                </div> :
                <div key="play">
                    <i className={`fas fa-play ${styles.primary_controller} ${styles.controller}`}></i>
                </div>
                }
            </div>
            <div className={styles.fast_forward}>
                <div 
                className={`${styles.button} ${styles.sub_controller_wrapper}`}
                onClick={() => {props.handleClickSound(); props.handleFastForward();}}>
                    <i className={`fas fa-forward ${styles.sub_controller} ${styles.controller}`}></i>
                </div>
                <span>+10s</span>
            </div>
        </div>
    )};

export default Controller;