import Clock from './clock';

class TimerService {
    constructor(focusTime, breakTime, goalCycle) {
        this.clock = new Clock(focusTime, breakTime, goalCycle);
    }

    getCurrentCycle() {
        return this.clock.getCurrentCycle();
    }

    getGoalCycle() {
        return this.clock.getGoalCycle();
    }

    setGoalCycle(goalCycle) {
        return this.clock.setGoalCycle(goalCycle);
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

    setFocusTime(focusHours, focusMinutes) {
        return this.clock.setFocusTime(focusHours, focusMinutes);
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
    
    setBreakTime(breakHours, breakMinutes) {
        return this.clock.setBreakTime(breakHours, breakMinutes);
    }

    resetTimer() {
        this.clock.resetTimer();
    }

    getCurrentTimerStatus() {
        return this.clock.getCurrentTimerStatus();
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

    isGoalReached() {
        return this.clock.isGoalReached();
    }

    //get current time formatted as [hours]:[minutes]:[seconds]
    getFormattedCurrentTime() {
        return this.clock.getFormettedCurrentTime();
    }

    // Fast Forward the timer by a specific seconds
    fastForward(seconds) {
        this.clock.fastForward(seconds);
    }

    // Fast Backward the timer by a specific seconds
    fastBackward(seconds) {
        this.clock.fastBackward(seconds);
    }

    // Console debugger: Only used for development purposes
    debug() {
        this.clock.debug();
    }
}

export default TimerService;