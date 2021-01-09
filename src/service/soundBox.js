import focusStartSound from '../sounds/focus.wav';
import breakStartSound from '../sounds/break.wav';
import goalReachedSound from '../sounds/goal.wav';
import clickSound from '../sounds/click.wav';

class SoundBox {
    // Audio objects
    focusStartSound = new Audio(focusStartSound);
    breakStartSound = new Audio(breakStartSound);
    goalReachedSound = new Audio(goalReachedSound);
    clickSound = new Audio(clickSound);


    makeFocusStartSound() {
        this.focusStartSound.play();  
    }

    makeBreakStartSound() {
        this.breakStartSound.play();
    }

    makeGoalReachedSound() {
        this.goalReachedSound.play();
    }

    makeClickSound() {
        this.clickSound.play();
    }
}

export default SoundBox;