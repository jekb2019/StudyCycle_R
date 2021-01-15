import {useRef} from 'react';
import styles from './controller.module.css';

const Controller = (props) => {

    const primaryControllerRef = useRef();

    const primaryControllers = [
        {
            name: 'pause',
            element: <div id="pause" key="pause">
                        <i className={`fas fa-pause ${styles.primary_controller} ${styles.controller}`}></i>
                    </div>
        },
        {
            name: 'play',
            element: <div id="play" key="play">
                        <i className={`fas fa-play ${styles.primary_controller} ${styles.controller}`}></i>
                    </div>
        },
        {
            name: 'reset',
            element: <div id="reset" key="reset">
                        <i className={`fas fa-redo-alt ${styles.primary_controller} ${styles.controller}`}></i>
                    </div>
        }
    ];

    const handlePrimaryControllerAction = () => {
        props.soundBox.playClickSound();
        const childId = primaryControllerRef.current.children[0].id;
        switch(childId) {
            case 'play':
                props.handleStartTimer();
                break;
            case 'pause':
                props.handlePauseTimer();
                break;
            case 'reset':
                props.handleResetTimer();
                break;
            default:
                console.log("Error loading Primary Controller");
        }
    }

    const handleFastForward = () => {
        props.soundBox.playClickSound();
        props.handleFastForward();
        // TO DO: implelement
    }

    const handleFastBackward = () => {
        props.soundBox.playClickSound();
        props.handleFastBackward();
        // TO DO: implelement
    }

    return (
        <div className={styles.controllers}>
            <div className={`${styles.fast_backward} ${styles.controller_wrapper}`}>
                <div className={`${styles.button} ${styles.sub_controller_wrapper}`} onClick={handleFastBackward}>
                    <i className={`fas fa-backward ${styles.sub_controller} ${styles.controller}`}></i>
                </div>
                <span className={styles.fastWindingDescription}>- 3 min</span>
            </div>
            <div ref={primaryControllerRef} className={`${styles.button} ${styles.controller_wrapper}`} onClick={handlePrimaryControllerAction}>
                {
                    primaryControllers.map((primaryController) => {
                        if(props.isTimerRunning && primaryController.name === 'pause' && !props.isGoalCycleFinished) {
                            return primaryController.element;
                        } else if(!props.isTimerRunning && primaryController.name === 'play' && !props.isGoalCycleFinished) {
                            return primaryController.element;
                        } else if(props.isGoalCycleFinished && primaryController.name === 'reset') {
                            return primaryController.element;
                        }
                    })
                }
            </div>
            <div className={`${styles.fast_forward} ${styles.controller_wrapper}`}>
                <div className={`${styles.button} ${styles.sub_controller_wrapper}`} onClick={handleFastForward}>
                    <i className={`fas fa-forward ${styles.sub_controller} ${styles.controller}`}></i>
                </div>
                <span className={styles.fastWindingDescription}>+ 3 min</span>
            </div>
        </div>
    )
};

export default Controller;