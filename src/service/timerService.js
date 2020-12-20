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

    resetTimer() {
        this.clock.resetTimer();
    }

    resetCycle() {
        this.clock.resetCycle();
    }

    getCurrentTime() {
        this.clock.getCurrentTime();
    }
    
    getCurrentCycle() {
        this.clock.getCurrentCycle();
    }

    // Check whether it is focus or break time
    getCurrentStatus() {
        this.clock.getCurrentStatus();
    }

    // used for debugging
    traceStatus() {
        const currentTime = clock.getCurrentTime();
        const currentCycle = clock.getCurrentCycle();
        const currentStatus = clock.getCurrentStatus();
        console.log(`Current Time: ${currentTime}`);
        console.log(`Current Cycle: ${currentCycle}`);
        console.log(`Current Status: ${currentStatus}`);
    }
}