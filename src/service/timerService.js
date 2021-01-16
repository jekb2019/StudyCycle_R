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
}

export default TimerService;