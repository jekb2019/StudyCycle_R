class Task {    
    constructor(name) {
        this.name = name;
        this.key = new Date().getTime();
        this.isDone = false;
    }

    editName(name) {
        this.name = name;
    }

    getIsDone() {
        return this.isDone;
    }

    setIsDone() {
        if(!this.isDone) {
            this.isDone = true;
        }
    }

    unsetIsDone() {
        if(this.isDone) {
            this.isDone = false;
        }
    }

    getKey() {
        return this.key;
    }

    // Console debugger: Only used for development purposes
    debug() {
        console.log(`-----Task-----`);
        console.log(`Key: ${this.key}`);
        console.log(`Name: ${this.name}`);
        console.log(`isDone: ${this.isDone}`);
    }
}

export default Task;