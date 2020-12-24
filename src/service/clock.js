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
            console.log(this.getFormettedCurrentTime());
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

    // get current time in integer format
    getCurrentTime() {
        return this.currentTime;
    }

    //get current time formatted as [hours]:[minutes]:[seconds]
    getFormettedCurrentTime() {
        let time = this.currentTime;

        const hours = Math.floor(time/(60*60));
        time = time%(60*60);
        const minutes = Math.floor(time/60);
        const seconds = time%60;
        
        console.log(hours, minutes, seconds);

        let stringHours, stringMinutes, stringSeconds;
        if(hours < 10) {
            stringHours = `0${hours}`;
        } else {
            stringHours = `${hours}`;
        }
        if(minutes < 10) {
            stringMinutes = `0${minutes}`;
        } else {
            stringMinutes = `${minutes}`;
        }
        if(seconds < 10) {
            stringSeconds = `0${seconds}`;
        } else {
            stringSeconds = `${seconds}`;
        }
        return `${stringHours}:${stringMinutes}:${stringSeconds}`;
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