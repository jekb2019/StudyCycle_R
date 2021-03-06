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

    getCurrentCycle() {
        return this.currentCycle;
    }

    getGoalCycle() {
        if(localStorage.getItem('goalCycleSettingStored')) {
            return parseInt(localStorage.getItem('goalCycleSettingStored'));
        } else {
            return this.goalCycle;
        }
    }

    setGoalCycle(goalCycle) {
        if(this.currentCycle > goalCycle) {
            return false
        } else {
            this.goalCycle = goalCycle;
            localStorage.setItem('goalCycleSettingStored', this.goalCycle);
            return true;
        }
    }

    // Focus Time Getters
    getFocusTime() {
        if(localStorage.getItem('focusTimeSettingStored')) {
            return parseInt(localStorage.getItem('focusTimeSettingStored'));
        } else {
            return this.focusTime;
        }
    }

    getFocusTimeHours() {
        return Math.floor(this.getFocusTime() / (60 * 60));
    }
    
    getFocusTimeMinutes() {
        return Math.floor(this.getFocusTime() % (60 * 60) / 60);
    }
    
    getFocusTimeSeconds() {
        return (this.getFocusTime() % (60 * 60) / 60) % 60;
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
            localStorage.setItem('focusTimeSettingStored', this.focusTime);
            return true;
        } else {
            this.focusTime = tempFocusTime;
            localStorage.setItem('focusTimeSettingStored', this.focusTime);
            return true;
        }
    }

    // Break Time Getters
    getBreakTime() {
        if(localStorage.getItem('breakTimeSettingStored')) {
            return parseInt(localStorage.getItem('breakTimeSettingStored'));
        } else {
            return this.breakTime;
        }
    }

    getBreakTimeHours() {
        return Math.floor(this.getBreakTime() / (60 * 60));
    }
    
    getBreakTimeMinutes() {
        return Math.floor(this.getBreakTime() % (60 * 60) / 60);
    }
    
    getBreakTimeSeconds() {
        return (this.getBreakTime() % (60 * 60) / 60) % 60;
    }

    // return true if break time is valid
    setBreakTime(breakHours, breakMinutes) {
        const tempBreakTime = breakHours * 60 * 60 + breakMinutes * 60;        
        if(this.currentTime >= tempBreakTime && this.currentTimerStatus === TimerStatusType.BREAK) {
            if(this.currentCycle === this.goalCycle) {
                this.breakTime = tempBreakTime;
                this.processGoalReached();
                localStorage.setItem('breakTimeSettingStored', this.breakTime);
                return true;
            } else {
                this.changeTimerStatus(TimerStatusType.FOCUS);
                this.currentTime = 0;
                this.breakTime = tempBreakTime;
                this.currentCycle++;
                localStorage.setItem('breakTimeSettingStored', this.breakTime);
                return true;
            }
        } else {
            this.breakTime = tempBreakTime;
            localStorage.setItem('breakTimeSettingStored', this.breakTime);
            return true;
        }
    }

    resetTimer() {
        this.pauseTimer();
        this.currentCycle = 1;
        this.currentTime = 0;
        this.currentTimerStatus = TimerStatusType.NONE;
        this.isTimerInitiated = false;
    }

    getCurrentTimerStatus() {
        return this.currentTimerStatus;
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
                console.log(`ERROR: Invalid Timer Status`);
        }
    }

    // Initiate timer when it is first time ran (or ran after being reset)
    initiateTimer() {
        this.isTimerInitiated = true;
        this.changeTimerStatus(TimerStatusType.FOCUS);
        this.startTimer();
    }

    // Start running timer
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

    // Fast Forward the timer by a specific seconds
    fastForward(seconds) {
        const tempTime = this.currentTime + seconds;
        if(this.currentTimerStatus === TimerStatusType.FOCUS) {
            if(tempTime > this.focusTime) {
                // this.pauseTimer();
                this.currentTime = 0;
                this.changeTimerStatus(TimerStatusType.BREAK);
                // this.startTimer();
            } else {
                if(this.isClockRunning) {
                    this.pauseTimer();
                    this.currentTime = tempTime;
                    this.startTimer();
                } else {
                    this.currentTime = tempTime;
                }
            }
        } else if(this.currentTimerStatus === TimerStatusType.BREAK) {
            if(tempTime > this.breakTime) {
                if(this.currentCycle === this.goalCycle) {
                    this.currentTime = this.breakTime;
                    this.processGoalReached()
                } else {
                    this.currentTime = 0;
                    this.currentCycle++;
                    this.changeTimerStatus(TimerStatusType.FOCUS);
                }
            } else {
                if(this.isClockRunning) {
                    this.pauseTimer();
                    this.currentTime = tempTime;
                    this.startTimer();
                } else {
                    this.currentTime = tempTime;
                }
            }
        }
    }

    // Fast Backward the timer by a specific seconds
    fastBackward(seconds) {
        const tempTime = this.currentTime - seconds;
        if(tempTime < 0) {
            if(this.isClockRunning) {
                this.pauseTimer();
                this.currentTime = 0;
                this.startTimer();
            } else {
                this.currentTime = 0;
            }
        } else {
            if(this.isClockRunning) {
                this.pauseTimer();
                this.currentTime = tempTime;
                this.startTimer();
            } else {
                this.currentTime = tempTime;
            }
        }
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
}

export default Clock;