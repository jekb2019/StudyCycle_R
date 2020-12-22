import SoundBox from './soundBox.js';

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
        this.isClockRunning = false;
        this.soundBox = new SoundBox(); 
    }

    startTimer() {
        this.isClockRunning = true;
        this.timer = setInterval(() => {
            this.currentTime++;
            console.log(this.currentTime);
        }, 1000)
    }

    switchStatus(status) {
        if(status === this.status.FOCUS) {
            this.currentStatus = this.state.FOCUS;
            this.soundBox.makeFocusStartSound();
        } else if (status === this.status.BREAK) {
            this.currentStatus = this.state.BREAK;
            this.soundBox.makeBreakStartSound();
        } else {
            console.log("ERROR: incorrect status");
        }
    }

    stopTimer() {
        this.isClockRunning = false;
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
        return this.currentStatus;
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

export default Clock;