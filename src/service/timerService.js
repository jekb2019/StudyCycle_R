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
        const currentTime = this.clock.getCurrentTime();
        const currentCycle = this.clock.getCurrentCycle();
        const currentStatus = this.clock.getCurrentStatus();
        console.log(`Current Time: ${currentTime}`);
        console.log(`Current Cycle: ${currentCycle}`);
        console.log(`Current Status: ${currentStatus}`);
    }
}

export default TimerService;