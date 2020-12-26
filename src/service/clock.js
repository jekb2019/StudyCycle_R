import SoundBox from './soundBox';
import Constants from '../common/constants';

// Class that represents a clock instance which stores the current timer information
class Clock {
    constructor() {
        this.focusTime = 1 * 60 * 60; 
        this.breakTime = 10 * 60;
        this.timer = undefined; // stores setInterval instance for running the timere every second
        this.isGoalCycleReached = false;
        this.isClockRunning = false;
        this.currentTime = 0;
        this.currentCycle = 1;
        this.maxCycle = 8;
        this.soundBox = new SoundBox();
        this.constants = new Constants(); 
        this.status = this.constants.getStatusConstants();
        this.currentStatus = this.status.FOCUS;
    }

    startTimer() {
        if(this.currentTime === 0 && this.currentCycle === 1 && this.currentStatus === this.status.FOCUS) {
            this.soundBox.makeFocusStartSound();
        }

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
                    if(this.currentCycle >= this.maxCycle) {
                        if(this.breakTime !== 0) {
                            this.currentTime = tempCurrentTime;
                        }
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
        }, 1000)
    }

    processGoalCycleReached() {
        console.log("GOAL!!");
        this.soundBox.makeGoalReachedSound();
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
        if(!this.isGoalCycleReached) {
            const tempCurrentTime = this.currentTime + sec;
            if(this.currentStatus === this.status.FOCUS && tempCurrentTime > this.focusTime) {
                this.currentTime = this.focusTime;
            } else if(this.currentStatus === this.status.FOCUS){
                this.currentTime = tempCurrentTime;
            }
    
            if(this.currentStatus === this.status.BREAK && tempCurrentTime > this.breakTime) {
                this.currentTime = this.breakTime;
                if(this.currentCycle >= this.maxCycle) {
                    this.processGoalCycleReached();
                }
            } else if(this.currentStatus === this.status.BREAK) {
                this.currentTime = tempCurrentTime;
            }
        }
    }

    fastBackward(sec) {
        if(!this.isGoalCycleReached) {
            if(this.currentTime - sec < 0) {
                this.currentTime = 0;
            } else {
                this.currentTime = this.currentTime - sec;
            }
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

    setFocusTime(hour, minute) {
        const totalTime = hour*60*60 + minute*60;
        if(totalTime < 1 * 60) {
            window.alert("Focus Time must be more than 1 minute!");
            return;
        }
        this.focusTime = totalTime;
    }

    setBreakTime(hour, minute) {
        const totalTime = hour*60*60 + minute*60;
        this.breakTime = totalTime;
    }

    setGoalCycle(cycle) {
        if(cycle < this.currentCycle) {
            window.alert("Current cycle exceeds the goal cycle! Please reset the timer and try again.");
            return;
        }
        this.maxCycle = cycle;
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