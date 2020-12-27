import focusStartSound from '../sounds/focus.wav';
import breakStartSound from '../sounds/break.wav';
import goalReachedSound from '../sounds/goal.wav';

class SoundBox {
    focusStartSound = new Audio(focusStartSound);
    breakStartSound = new Audio(breakStartSound);
    goalReachedSound = new Audio(goalReachedSound);
    makeFocusStartSound() {
        this.focusStartSound.play();  
    }

    makeBreakStartSound() {
        this.breakStartSound.play();
    }

    makeGoalReachedSound() {
        this.goalReachedSound.play();
    }
}

export default SoundBox;