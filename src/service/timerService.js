import Clock from './clock';

class TimerService {
    constructor(focusTime, breakTime, goalCycle) {
        this.clock = new Clock(focusTime, breakTime, goalCycle);
    }

    initiateTimer() {
        this.clock.initiateTimer();
    }

    startTimer() {
        this.clock.startTimer();
    }

    pauseTimer() {
        this.clock.pauseTimer();
    }

    debug() {
        this.clock.debug();
    }

    resetTimer() {
        this.clock.resetTimer();
    }

    getCurrentTimerStatus() {
        return this.clock.getCurrentTimerStatus();
    }

    getFormattedCurrentTime() {
        return this.clock.getFormettedCurrentTime();
    }

    getGoalCycle() {
        return this.clock.getGoalCycle();
    }

    getCurrentCycle() {
        return this.clock.getCurrentCycle();
    }

    setGoalCycle(goalCycle) {
        return this.clock.setGoalCycle(goalCycle);
    }

    setFocusTime(focusHours, focusMinutes) {
        return this.clock.setFocusTime(focusHours, focusMinutes);
    }

    setBreakTime(breakHours, breakMinutes) {
        return this.clock.setBreakTime(breakHours, breakMinutes);
    }

    // Focus Time Getters

    getFocusTime() {
        return this.clock.getFocusTime();
    }

    getFocusTimeHours() {
        return this.clock.getFocusTimeHours();
    }
    
    getFocusTimeMinutes() {
        return this.clock.getFocusTimeMinutes();
    }
    
    getFocusTimeSeconds() {
        return this.clock.getFocusTimeSeconds();
    }

    // Break Time Getters

    getBreakTime() {
        return this.clock.getBreakTime();
    }

    getBreakTimeHours() {
        return this.clock.getBreakTimeHours();
    }
    
    getBreakTimeMinutes() {
        return this.clock.getBreakTimeMinutes();
    }
    
    getBreakTimeSeconds() {
        return this.clock.getBreakTimeSeconds();
    }

    fastForward(seconds) {
        this.clock.fastForward(seconds);
    }

    fastBackward(seconds) {
        this.clock.fastBackward(seconds);
    }

    isGoalReached() {
        return this.clock.isGoalReached();
    }

    // // called when the timer is first started
    // startTimer() {
    //     this.clock.startTimer();
    // }

    // stopTimer() {
    //     this.clock.stopTimer();
    // }

    // // // To-be tested
    // // reset() {
    // //     if(this.clock.getCurrentTime() === 0) {
    // //         this.clock.resetCycle();
    // //     } else {
    // //         this.clock.resetTimer();
    // //     }
    // // }

    // resetTimer() {
    //     this.clock.resetTimer();
    // }

    // resetCycle() {
    //     this.clock.resetCycle();
    // }

    // fastForward(sec) {
    //     this.clock.fastForward(sec);
    // }

    // fastBackward(sec) {
    //     this.clock.fastBackward(sec);
    // }

    // getCurrentTime() {
    //     return this.clock.getCurrentTime();
    // }

    // getFormettedCurrentTime() {
    //     return this.clock.getFormettedCurrentTime();
    // }
    
    // getCurrentCycle() {
    //     return this.clock.getCurrentCycle();
    // }

    // getMaxCycle() {
    //     return this.clock.getMaxCycle();
    // }

    // // Check whether it is focus or break time
    // getCurrentTimerStatus() {
    //     return this.clock.getCurrentTimerStatus();
    // }

    // getIsGoalCycleReached() {
    //     return this.clock.getIsGoalCycleReached();
    // }

    // getFocusTime() {
    //     return this.clock.getFocusTime();
    // }

    // getFocusTimeHour() {
    //     return this.clock.getFocusTimeHour();
    // }
    
    // getFocusTimeMinute() {
    //     return this.clock.getFocusTimeMinute();
    // }
    
    // getFocusTimeSecond() {
    //     return this.clock.getFocusTimeSecond();
    // }

    // getBreakTime() {
    //     return this.clock.getBreakTime();
    // }

    // getBreakTimeHour() {
    //     return this.clock.getBreakTimeHour();
    // }
    
    // getBreakTimeMinute() {
    //     return this.clock.getBreakTimeMinute();
    // }
    
    // getBreakTimeSecond() {
    //     return this.clock.getBreakTimeSecond();
    // }

    // setFocusTime(hour, minute) {
    //     this.clock.setFocusTime(hour, minute);
    // }

    // setBreakTime(hour, minute) {
    //     this.clock.setBreakTime(hour, minute);
    // }

    // setGoalCycle(cycle) {
    //     this.clock.setGoalCycle(cycle);
    // }

    // // used for debugging
    // traceStatus() {
    //     const currentTime = this.clock.getFormettedCurrentTime();
    //     const currentCycle = this.clock.getCurrentCycle();
    //     const currentTimerStatus = this.clock.getCurrentTimerStatus();
    //     const isGoalCycleReached = this.clock.getIsGoalCycleReached();
    //     console.log(`Current Time: ${currentTime}`);
    //     console.log(`Current Cycle: ${currentCycle}`);
    //     console.log(`Current Status: ${currentTimerStatus}`);
    //     console.log(`Is Goal Reached: ${isGoalCycleReached}`);
    // }
}

export default TimerService;