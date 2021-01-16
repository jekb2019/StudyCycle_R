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

    playFocusStartSound() {
        this.focusStartSound.play();  
    }

    playBreakStartSound() {
        this.breakStartSound.play();
    }

    playGoalReachedSound() {
        this.goalReachedSound.play();
    }

    playClickSound() {
        this.clickSound.play();
    }
}

export default SoundBox;