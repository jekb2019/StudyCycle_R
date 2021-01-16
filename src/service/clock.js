import TimerStatusType from './enums/timerStatusType';

// Class that represents a clock instance which stores the current timer information
class Clock {
    constructor(focusTime, breakTime, goalCycle) {
        this.focusTime = focusTime; 
        this.breakTime = breakTime;
        this.goalCycle = goalCycle;
        this.timer = null; // stores setInterval instance for running the timere every second
        this.isGoalCycleReached = false;
        this.isClockRunning = false;
        this.isTimerInitiated = false;
        this.currentTime = 0;
        this.currentCycle = 1;
        this.currentTimerStatus = TimerStatusType.NONE;
        this.timerObject = null;
    }

    getGoalCycle() {
        return this.goalCycle;
    }

    getCurrentCycle() {
        return this.currentCycle;
    }

    // Focus Time Getters
    getFocusTime() {
        return this.focusTime;
    }

    getFocusTimeHours() {
        return Math.floor(this.focusTime / (60 * 60));
    }
    
    getFocusTimeMinutes() {
        return Math.floor(this.focusTime % (60 * 60) / 60);
    }
    
    getFocusTimeSeconds() {
        return (this.focusTime % (60 * 60) / 60) % 60;
    }

    // Break Time Getters
    getBreakTime() {
        return this.breakTime;
    }

    getBreakTimeHours() {
        return Math.floor(this.breakTime / (60 * 60));
    }
    
    getBreakTimeMinutes() {
        return Math.floor(this.breakTime % (60 * 60) / 60);
    }
    
    getBreakTimeSeconds() {
        return (this.breakTime % (60 * 60) / 60) % 60;
    }

    setGoalCycle(goalCycle) {
        if(this.currentCycle > goalCycle) {
            return false
        } else {
            this.goalCycle = goalCycle;
            return true;
        }
    }

    // return true if focus time is valid
    setFocusTime(focusHours, focusMinutes) {
        const tempFocusTime = focusHours * 60 * 60 + focusMinutes * 60;
        const minimumTime = 1 * 60;
        if(tempFocusTime < minimumTime) {
            return false;
        } else if(this.currentTime >= tempFocusTime && this.currentTimerStatus === TimerStatusType.FOCUS){
            this.changeTimerStatus(TimerStatusType.BREAK);
            this.currentTime = 0;
            this.focusTime = tempFocusTime;
            return true;
        } else {
            this.focusTime = tempFocusTime;
            return true;
        }

    }

    // return true if break time is valid
    setBreakTime(breakHours, breakMinutes) {
        const tempBreakTime = breakHours * 60 * 60 + breakMinutes * 60;        
        if(this.currentTime >= tempBreakTime && this.currentTimerStatus === TimerStatusType.BREAK) {
            if(this.currentCycle === this.goalCycle) {
                this.processGoalReached();
                return true;
            } else {
                this.changeTimerStatus(TimerStatusType.FOCUS);
                this.currentTime = 0;
                this.breakTime = tempBreakTime;
                return true;
            }
        } else {
            this.breakTime = tempBreakTime;
            return true;
        }
    }

    getCurrentTimerStatus() {
        return this.currentTimerStatus;
    }

    resetTimer() {
        this.pauseTimer();
        this.currentCycle = 1;
        this.currentTime = 0;
        this.currentTimerStatus = TimerStatusType.NONE;
        this.isTimerInitiated = false;
    }

    // Console debugger - only used for development purposes
    debug() {
        console.log(`----- DEBUG -----`);
        console.log(`Timer Status: ${this.currentTimerStatus}`);
        console.log(`Timer Initiated: ${this.isTimerInitiated}`);
        console.log(`Is Clock Running: ${this.isClockRunning}`);
        console.log(`Current Time: ${this.currentTime}`);
        console.log(`Current Cycle: ${this.currentCycle}`);
        console.log(`Focus Time: ${this.focusTime}`);
        console.log(`Break Time: ${this.breakTime}`);
        console.log(`Goal Cycles: ${this.goalCycle}`);
        console.log(`\n`);
    }

    changeTimerStatus(timerStatus) {
        switch(timerStatus) {
            case TimerStatusType.NONE:
                this.currentTimerStatus = TimerStatusType.NONE;
                break;
            case TimerStatusType.FOCUS:
                this.currentTimerStatus = TimerStatusType.FOCUS;
                break;
            case TimerStatusType.BREAK:
                this.currentTimerStatus = TimerStatusType.BREAK;
                break;
            case TimerStatusType.GOAL:
                this.currentTimerStatus = TimerStatusType.GOAL;
                break;
            default:
                console.log(`Invalid Timer Status`);
        }
    }

    initiateTimer() {
        this.isTimerInitiated = true;
        this.changeTimerStatus(TimerStatusType.FOCUS);
        this.startTimer();
    }


    startTimer() {
        this.isClockRunning = true;
        const interval = 1000;
        let expectedTime = Date.now() + interval;

        const start = () => {
            this.timerObject = setTimeout(round, interval);
        }

        const round = () => {
            // Calculate drift time
            let drift = Date.now() - expectedTime;
            work();
            expectedTime += interval;
          
            // Run another round only if goal is not met
            if(this.currentTimerStatus !== TimerStatusType.GOAL) {
                this.timerObject = setTimeout(round, interval - drift);
            }
        }

        const work = () => {
            if(this.currentTimerStatus === TimerStatusType.FOCUS && this.currentTime >= this.focusTime) {
                this.currentTime = 0;
                this.changeTimerStatus(TimerStatusType.BREAK);

            } else if (this.currentTimerStatus === TimerStatusType.BREAK && this.currentTime >= this.breakTime) {
                const tempCurrentCycle = this.currentCycle + 1;
                if(tempCurrentCycle > this.goalCycle) {
                    this.processGoalReached();
                    return;
                }
                this.currentTime = 0;
                this.changeTimerStatus(TimerStatusType.FOCUS);
                this.currentCycle = tempCurrentCycle;
            }
            this.currentTime++;
        }
        start();
    }

    pauseTimer() {
        this.isClockRunning = false;
        clearTimeout(this.timerObject);
    }

    processGoalReached() {
        console.log("GOAL!")
        this.pauseTimer();
        this.changeTimerStatus(TimerStatusType.GOAL);
    }

    isGoalReached() {
        if(this.currentTimerStatus === TimerStatusType.GOAL) {
            return true;
        } else {
            return false;
        }
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

    fastForward(seconds) {
        const tempTime = this.currentTime + seconds;
        if(this.currentTimerStatus === TimerStatusType.FOCUS) {
            if(tempTime >= this.focusTime) {
                // this.pauseTimer();
                this.currentTime = this.focusTime;
                // this.startTimer();
            } else {
                this.pauseTimer();
                this.currentTime = tempTime;
                this.startTimer();
            }
        } else if(this.currentTimerStatus === TimerStatusType.BREAK) {
            if(tempTime >= this.breakTime) {
                this.currentTime = this.breakTime;
            } else {
                this.pauseTimer();
                this.currentTime = tempTime;
                this.startTimer();
            }
        }
    }

    fastBackward(seconds) {
        const tempTime = this.currentTime - seconds;
        if(tempTime < 0) {
            this.pauseTimer();
            this.currentTime = 0;
            this.startTimer();
        } else {
            this.pauseTimer();
            this.currentTime = tempTime;
            this.startTimer();
        }
    }
}

export default Clock;