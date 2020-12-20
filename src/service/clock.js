class Clock {
    timer = undefined;
    status = {
        FOCUS: 'focus',
        BREAK: 'break'
    }

    constructor() {
        this.currentTime = 0;
        this.currentCycle = 1;
        this.currentStatus = this.status.FOCUS;
        this.timerPaused = true;
        this.soundBox = new SoundBox(); 
    }

    startTimer() {
        this.timer = setInterval(() => {
            this.currentTime++;
        }, 1000)
    }

    switchStatus(status) {
        if(status === this.status.FOCUS) {
            this.currentStatus = this.state.FOCUS;
            soundBox.makeFocusStartSound();
        } else if (status === this.status.BREAK) {
            this.currentStatus = this.state.BREAK;
            soundBox.makeBreakStartSound();
        } else {
            console.log("ERROR: incorrect status");
        }
    }

    stopTimer() {
        clearInterval(this.timer);
    }

    resetTimer() {
        this.stopTimer();
        this.currentTime = 0;
    }

    resetCycle() {
        this.stopTimer();
        this.currentCycle = 1;
    }

    getCurrentTime() {
        return this.currentTime;
    }

    getCurrentCycle() {
        return this.currentCycle;
    }

    // Check whether it is focus or break time
    getCurrentStatus() {
        this.currentStatus;
    }

    // return true only if both current time and current cycle is reset
    isCurrentTimeResetWithoutCycle() {
        if(this.currentTime === 0 && this.currentCycle === 1) {
            return true;
        } else {
            return false;
        }
    }
}