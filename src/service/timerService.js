import Clock from './clock';

class TimerService {
    constructor() {
        this.clock = new Clock();
    }

    // called when the timer is first started
    startTimer() {
        this.clock.startTimer();
    }

    stopTimer() {
        this.clock.stopTimer();
    }

    // To-be tested
    reset() {
        if(this.clock.getCurrentTime() === 0) {
            this.clock.resetCycle();
            console.log("Cycle reset");
        } else {
            this.clock.resetTimer();
            console.log("Timer reset");
        }
    }

    resetTimer() {
        this.clock.resetTimer();
    }

    resetCycle() {
        this.clock.resetCycle();
    }

    fastForward(sec) {
        this.clock.fastForward(sec);
    }

    fastBackward(sec) {
        this.clock.fastBackward(sec);
    }

    getCurrentTime() {
        return this.clock.getCurrentTime();
    }

    getFormettedCurrentTime() {
        return this.clock.getFormettedCurrentTime();
    }
    
    getCurrentCycle() {
        return this.clock.getCurrentCycle();
    }

    getMaxCycle() {
        return this.clock.getMaxCycle();
    }

    // Check whether it is focus or break time
    getCurrentStatus() {
        return this.clock.getCurrentStatus();
    }

    getIsGoalCycleReached() {
        return this.clock.getIsGoalCycleReached();
    }

    getFocusTime() {
        return this.clock.getFocusTime();
    }

    getFocusTimeHour() {
        return this.clock.getFocusTimeHour();
    }
    
    getFocusTimeMinute() {
        return this.clock.getFocusTimeMinute();
    }
    
    getFocusTimeSecond() {
        return this.clock.getFocusTimeSecond();
    }

    getBreakTime() {
        return this.clock.getBreakTime();
    }

    getBreakTimeHour() {
        return this.clock.getBreakTimeHour();
    }
    
    getBreakTimeMinute() {
        return this.clock.getBreakTimeMinute();
    }
    
    getBreakTimeSecond() {
        return this.clock.getBreakTimeSecond();
    }

    // used for debugging
    traceStatus() {
        const currentTime = this.clock.getFormettedCurrentTime();
        const currentCycle = this.clock.getCurrentCycle();
        const currentStatus = this.clock.getCurrentStatus();
        const isGoalCycleReached = this.clock.getIsGoalCycleReached();
        console.log(`Current Time: ${currentTime}`);
        console.log(`Current Cycle: ${currentCycle}`);
        console.log(`Current Status: ${currentStatus}`);
        console.log(`Is Goal Reached: ${isGoalCycleReached}`);
    }
}

export default TimerService;