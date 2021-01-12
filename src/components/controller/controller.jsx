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

    const handlePrimaryControllerAction = (event) => {
        const childId = primaryControllerRef.current.children[0].id;

        switch(childId) {
            case 'play':
                props.handleStartTimer();
                break;
            case 'pause':
                // TO DO: implement
                break;
            case 'reset':
                // TO DO: implement
                break;
            default:
                console.log("Error loading Primary Controller");
        }
    }


    return (
        <div className={styles.controllers}>
            <div className={`${styles.fast_backward} ${styles.controller_wrapper}`}>
                <div className={`${styles.button} ${styles.sub_controller_wrapper}`}>
                    <i className={`fas fa-backward ${styles.sub_controller} ${styles.controller}`}></i>
                </div>
                <span className={styles.fastWindingDescription}>- 3 min</span>
            </div>
            <div ref={primaryControllerRef} className={`${styles.button} ${styles.controller_wrapper}`} onClick={handlePrimaryControllerAction}>
                {
                    // TO DO: Implement
                    primaryControllers.map((item) => {
                        // return item.element;
                    })
                }
                {primaryControllers[1].element}
            </div>
            <div className={`${styles.fast_forward} ${styles.controller_wrapper}`}>
                <div className={`${styles.button} ${styles.sub_controller_wrapper}`}>
                    <i className={`fas fa-forward ${styles.sub_controller} ${styles.controller}`}></i>
                </div>
                <span className={styles.fastWindingDescription}>+ 3 min</span>
            </div>
        </div>
    )
};

export default Controller;