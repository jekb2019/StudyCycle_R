import React, { useEffect, useRef, useState } from 'react';
import Clock from '../clock/clock';
import Controller from '../controller/controller';
import styles from './timer.module.css';

const Timer = (props) => {

    const handleStartTimer = () => {
        props.handleStartTimer();
    }
    const handlePauseTimer = () => {
        props.handlePauseTimer();
    }
    const handleResetTimer = () => {
        props.soundBox.makeClickSound();
    }

    return(
        <div className={styles.timer}>
            <div className={styles.indicators}>
                <div className={`${styles.indicator} ${styles.focusIndicator}`}>
                    <span>Focus</span>
                </div>
                <div className={styles.status}>
                    <div>
                        <i className={`fas fa-biking ${styles.cycle_icon}`}></i>
                        <span className={styles.cycle}>{`1/5`}</span>
                    </div>
                </div>
                <div className={`${styles.indicator} ${styles.breakIndicator}`}>
                    <span>Break</span>
                </div>
            </div>
            <div className={styles.clock_display}>
                <Clock className={styles.clock}/>
                <div className={styles.button} onClick={handleResetTimer}>
                    <i className={`fas fa-redo-alt ${styles.reset_icon}`}></i>
                </div>
            </div>

            <Controller
                soundBox={props.soundBox}
                handleStartTimer={handleStartTimer}
                handlePauseTimer={handlePauseTimer}/>
        </div>
    )
};

export default Timer;