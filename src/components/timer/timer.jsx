import React from 'react';
import Clock from '../clock/clock';
import Controller from '../controller/controller';
import styles from './timer.module.css';
const Timer = (props) => {
    const handleResetButtonClicked = () => {
        props.handleClickSound();
        props.service.resetTimer();
    }

    return(
    <div className={styles.timer}>
        <div className={styles.indicators}>
            <div className={styles.indicator}>
                <span>Focus</span>
            </div>
            <div className={styles.status}>
                <div>
                    <i className={`fas fa-biking ${styles.cycle_icon}`}></i>
                    <span className={styles.cycle}>1/5</span>
                </div>
            </div>
            <div className={styles.indicator}>
                <span>Break</span>
            </div>
        </div>
        <div className={styles.clock_display}>
            <Clock className={styles.clock}/>
            <div className={styles.button} onClick={handleResetButtonClicked}>
                <i className={`fas fa-redo-alt ${styles.reset_icon}`}></i>
            </div>
        </div>

        <Controller 
            handleClickSound={props.handleClickSound}
            service={props.service}/>
    </div>
)};

export default Timer;