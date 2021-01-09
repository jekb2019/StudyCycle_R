import React, { useEffect, useRef, useState } from 'react';
import Clock from '../clock/clock';
import Controller from '../controller/controller';
import styles from './timer.module.css';

const Timer = (props) => {
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
                <div className={styles.button}>
                    <i className={`fas fa-redo-alt ${styles.reset_icon}`}></i>
                </div>
            </div>

            <Controller/>
        </div>
    )
};

export default Timer;