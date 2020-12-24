import SoundBox from './soundBox.js';

class Clock {
    focusTime = 2 * 60 * 60; 
    breakTime = 10 * 60;
    timer = undefined;
    status = {
        FOCUS: 'focus',
        BREAK: 'break'
    }

    constructor() {
        this.currentTime = 7198 ;
        this.currentCycle = 1;
        this.currentStatus = this.status.FOCUS;
        this.isClockRunning = false;
        this.soundBox = new SoundBox(); 
    }

    startTimer() {
        this.isClockRunning = true;
        this.timer = setInterval(() => {
            const tempCurrentTime = this.currentTime + 1;

            if(this.currentStatus === this.status.FOCUS) {
                if(tempCurrentTime >= this.focusTime) {
                    this.switchStatus(this.status.BREAK);
                    this.currentTime = 0;
                }  else {
                    this.currentTime = tempCurrentTime;
                }
            } else if (this.currentStatus === this.status.BREAK) {
                if(tempCurrentTime >= this.breakTime) {
                    this.switchStatus(this.status.FOCUS);
                    this.currentTime = 0;
                }  else {
                    this.currentTime = tempCurrentTime;
                }
            }

            // console.log(this.getFormettedCurrentTime());
        }, 1000)
    }

    switchStatus(status) {
        if(status === this.status.FOCUS) {
            console.log("FOCUS -> BREAK")
            this.currentStatus = this.status.FOCUS;
            this.soundBox.makeFocusStartSound(); //fix error
        } else if (status === this.status.BREAK) {
            console.log("BREAK -> FOCUS")
            this.currentStatus = this.status.BREAK;
            this.soundBox.makeBreakStartSound(); //fix error
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

    fastForward(sec) {
        this.currentTime = this.currentTime + sec;
    }

    fastBackward(sec) {
        if(this.currentTime - sec < 0) {
            this.currentTime = 0;
        } else {
            this.currentTime = this.currentTime - sec;
        }
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
        
        // console.log(hours, minutes, seconds);

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