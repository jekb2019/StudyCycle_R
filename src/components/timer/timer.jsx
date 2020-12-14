import React from 'react';
import Clock from '../clock/clock';
import Controller from '../controller/controller';
import styles from './timer.module.css';
const Timer = (props) => (
    <div className={styles.timer}>
        <div className={styles.indicators}>
            <div className={styles.indicator}>
                <span>Focus</span>
            </div>
            <div className={styles.status}>
                <span className={styles.cycle}>Cycle 1/5</span>
                <span className={styles.time_info}>2 Hours 0 Minutes</span>
            </div>
            <div className={styles.indicator}>
                <span>Break</span>
            </div>
        </div>
        <div className={styles.clock_display}>
            <Clock className={styles.clock}/>
            <div className={styles.button}>
                <i id="reset-icon" className={`fas fa-redo-alt ${styles.icon}`}></i>
            </div>
        </div>

        <Controller/>
    </div>
);

export default Timer;