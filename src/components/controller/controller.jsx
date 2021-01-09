import {useState, forwardRef, useImperativeHandle} from 'react';
import styles from './controller.module.css';

const Controller = (props) => {
    const primaryControllers = [
        {
            name: 'pause',
            element: <div key="pause">
                        <i className={`fas fa-pause ${styles.primary_controller} ${styles.controller}`}></i>
                    </div>
        },
        {
            name: 'play',
            element: <div key="play">
                        <i className={`fas fa-play ${styles.primary_controller} ${styles.controller}`}></i>
                    </div>
        },
        {
            name: 'reset',
            element: <div key="reset">
                        <i className={`fas fa-redo-alt ${styles.primary_controller} ${styles.controller}`}></i>
                    </div>
        }
    ];

    return (
        <div className={styles.controllers}>
            <div className={`${styles.fast_backward} ${styles.controller_wrapper}`}>
                <div className={`${styles.button} ${styles.sub_controller_wrapper}`}>
                    <i className={`fas fa-backward ${styles.sub_controller} ${styles.controller}`}></i>
                </div>
                <span className={styles.fastWindingDescription}>- 3 min</span>
            </div>
            <div className={`${styles.button} ${styles.controller_wrapper}`}>
                {
                    primaryControllers.map((item) => {
                        // return item.element;
                    })
                }
                {primaryControllers[0].element}
            </div>
            <div className={`${styles.fast_forward} ${styles.controller_wrapper}`}>
                <div className={`${styles.button} ${styles.sub_controller_wrapper}`}>
                    <i className={`fas fa-forward ${styles.sub_controller} ${styles.controller}`}></i>
                </div>
                <span className={styles.fastWindingDescription}>+ 3 min</span>
            </div>
        </div>
    )};

export default Controller;