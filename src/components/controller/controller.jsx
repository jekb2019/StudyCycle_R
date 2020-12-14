import React from 'react';
import styles from './controller.module.css';

const Controller = (props) => (
        <div className={styles.controllers}>
            <div>
                <div className={`${styles.button} ${styles.sub_controller_wrapper}`}>
                    <i className={`fas fa-backward ${styles.sub_controller} ${styles.controller}`}></i>
                </div>
                <span>-10</span>
            </div>
            <div className={styles.button}>
                <i className={`fas fa-play ${styles.primary_controller} ${styles.controller}`} id="go"></i>
            </div>
            <div>
                <div className={`${styles.button} ${styles.sub_controller_wrapper}`}>
                    <i className={`fas fa-forward ${styles.sub_controller} ${styles.controller}`}></i>
                </div>
                <span>+10</span>
            </div>
        </div>
    );

export default Controller;