import focusStartSound from '../sounds/focus.wav';
import breakStartSound from '../sounds/break.wav';
import goalReachedSound from '../sounds/goal.wav';

class SoundBox {
    focusStartSound = new Audio(focusStartSound);
    breakStartSound = new Audio(breakStartSound);
    goalReachedSound = new Audio(goalReachedSound);
    makeFocusStartSound() {
        this.focusStartSound.play();  
        console.log("MAKE FOCUS SOUND")  
    }

    makeBreakStartSound() {
        this.breakStartSound.play();
        console.log("MAKE BREAK SOUND")  
    }

    makeGoalReachedSound() {
        this.goalReachedSound.play();
        console.log("MAKE GOAL SOUND")  
    }
}

export default SoundBox;