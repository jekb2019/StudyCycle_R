import {useState, forwardRef, useImperativeHandle} from 'react';
import styles from './controller.module.css';

const Controller = forwardRef((props, ref) => {
    const [isClockRunning, setIsClockRunning] = useState(false);

    useImperativeHandle(ref, () => ({switchIsClockRunningToFalse() {
        setIsClockRunning(false);
    }}));

    const switchIsClockRunning = () => {
        isClockRunning ? setIsClockRunning(false) : setIsClockRunning(true);
    }

    const handlePrimaryControllerClick = () => {
        switchIsClockRunning();
        props.handleClickSound();

        isClockRunning ? props.service.stopTimer() : props.service.startTimer();
    }

    return (
        <div className={styles.controllers}>
            <div className={styles.fast_backward}>
                <div 
                className={`${styles.button} ${styles.sub_controller_wrapper}`} 
                onClick={props.handleClickSound}>
                    <i className={`fas fa-backward ${styles.sub_controller} ${styles.controller}`}></i>
                </div>
                <span>-10s</span>
            </div>
            <div 
            className={styles.button} 
            onClick={handlePrimaryControllerClick}>
                {
                isClockRunning ?
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
                onClick={props.handleClickSound}>
                    <i className={`fas fa-forward ${styles.sub_controller} ${styles.controller}`}></i>
                </div>
                <span>+10s</span>
            </div>
        </div>
    )});

export default Controller;