class SoundBox {
    focusStartSound = new Audio("../sounds/focus.wav");
    breakStartSound = new Audio("../sounds/break.wav");
    makeFocusStartSound() {
        this.focusStartSound.play(); //fix error
    }

    makeBreakStartSound() {
        this.breakStartSound.play(); //fix error
    }

    makeGoalReachedSound() {
        
    }
}

export default SoundBox;