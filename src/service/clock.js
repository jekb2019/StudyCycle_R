import SoundBox from './soundBox';
import Constants from '../common/constants';
class Clock {
    focusTime = 2 * 60 * 60; 
    breakTime = 10 * 60;
    timer = undefined;

    constructor() {
        this.isGoalCycleReached = false;
        this.currentTime = 7198 ;
        this.currentCycle = 1;
        this.maxCycle = 1;
        this.isClockRunning = false;
        this.soundBox = new SoundBox();
        this.constants = new Constants(); 
        this.status = this.constants.getStatusConstants();
        this.currentStatus = this.status.FOCUS;
    }

    startTimer() {
        this.isClockRunning = true;
        this.isGoalCycleReached = false;
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
                    if(this.currentCycle === this.maxCycle) {
                        this.processGoalCycleReached();
                    } else {
                        this.switchStatus(this.status.FOCUS);
                        this.currentTime = 0;
                        this.currentCycle++;
                    }
                }  else {
                    this.currentTime = tempCurrentTime;
                }
            }

            // console.log(this.getFormettedCurrentTime());
        }, 1000)
    }

    processGoalCycleReached() {
        console.log("GOAL!!");
        this.stopTimer();
        this.isGoalCycleReached = true;
    }

    switchStatus(status) {
        if(status === this.status.FOCUS) {
            this.currentStatus = this.status.FOCUS;
            this.soundBox.makeFocusStartSound();
        } else if (status === this.status.BREAK) {
            this.currentStatus = this.status.BREAK;
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
        this.isGoalCycleReached = false;
        this.stopTimer();
        this.currentTime = 0;
        this.switchStatus(this.status.FOCUS);
        this.currentCycle = 1;
    }

    resetCycle() {
        this.stopTimer();
        this.currentCycle = 1;
    }

    fastForward(sec) {
        const tempCurrentTime = this.currentTime + sec;
        if(this.currentStatus === this.status.FOCUS && tempCurrentTime > this.focusTime) {
            this.currentTime = this.focusTime;
        } else if(this.currentStatus === this.status.FOCUS){
            this.currentTime = tempCurrentTime;
        }

        if(this.currentStatus === this.status.BREAK && tempCurrentTime > this.breakTime) {
            this.currentTime = this.breakTime;
            if(this.currentCycle === this.maxCycle) {
                this.processGoalCycleReached();
            }
        } else if(this.currentStatus === this.status.BREAK) {
            this.currentTime = tempCurrentTime;
        }


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

    getMaxCycle() {
        return this.maxCycle;
    }

    // Check whether it is focus or break time
    getCurrentStatus() {
        return this.currentStatus;
    }

    getIsGoalCycleReached() {
        return this.isGoalCycleReached;
    }

    getFocusTime() {
        return this.focusTime;
    }

    getFocusTimeHour() {
        return Math.floor(this.focusTime/(60*60));
    }
    
    getFocusTimeMinute() {
        return Math.floor(this.focusTime%(60*60)/60);
    }
    
    getFocusTimeSecond() {
        return (this.focusTime%(60*60)/60)%60;
    }

    getBreakTime() {
        return this.breakTime;
    }

    getBreakTimeHour() {
        return Math.floor(this.breakTime/(60*60));
    }
    
    getBreakTimeMinute() {
        return Math.floor(this.breakTime%(60*60)/60);
    }
    
    getBreakTimeSecond() {
        return (this.breakTime%(60*60)/60)%60;
    }

    // return true only if both current time and current cycle is reset
    // isCurrentTimeResetWithoutCycle() {
    //     if(this.currentTime === 0 && this.currentCycle === 1) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }
}

export default Clock;