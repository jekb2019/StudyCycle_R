class SoundBox {
    focusStartSound = new Audio("../sounds/focus.wav");
    breakStartSound = new Audio("../sounds/break.wav");
    makeFocusStartSound() {
        // console.log("focusfou");
    }

    makeBreakStartSound() {
        this.breakStartSound.play();
    }

    makeGoalReachedSound() {
        
    }
}

export default SoundBox;