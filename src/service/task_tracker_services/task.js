class Task {    
    constructor(name, key, isDone) {
        this.name = name;
        if(key === undefined) {
            this.key = new Date().getTime();
        } else {
            this.key = key;
        }
        if(isDone === undefined) {
            this.isDone = false;
        } else {
            this.isDone = isDone;
        }
    }

    getName() {
        return this.name;
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