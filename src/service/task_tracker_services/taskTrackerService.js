import Task from './task';

class TaskTrackerService {
    constructor () {
        this.tasks = [];
        this.locallyStoredTasks = {}
        if(localStorage.getItem('storedTasks')) {
            for(const [key, value] of Object.entries(JSON.parse(localStorage.getItem('storedTasks')))) {
                this.addTask(value.name, parseInt(key), value.isDone);
            }
        } else {
            this.initializeTaskTracker('Initial Task');
        }
        // this.debug();
    }

    initializeTaskTracker(name) {
        const task = new Task(name);
        this.tasks.unshift(task);
        this.locallyStoredTasks[task.getKey()] = {
            key: task.getKey(),
            name: task.getName(),
            isDone: task.getIsDone()
        };

        localStorage.setItem('storedTasks', JSON.stringify(this.locallyStoredTasks));
    }

    // Create a new task object and add to task array
    // Leave key and isDone parameter empty if creating a new task from the user
    addTask(name, key, isDone) {
        let task;
        if(key === undefined) {
            task = new Task(name);
        } else {
            task = new Task(name, key, isDone);
        }
        this.tasks.unshift(task);
        this.locallyStoredTasks[task.getKey()] = {
            key: task.getKey(),
            name: task.getName(),
            isDone: task.getIsDone()
        };

        // Save added tasks to local storage
        localStorage.removeItem('storedTasks');
        localStorage.setItem('storedTasks', JSON.stringify(this.locallyStoredTasks));
    }

    getAllTasks() {
        return this.tasks;
    }

    // Get a specific task of matching key
    getTask(key) {
        let matchingTask;
        this.tasks.map(task => {
            if(task.getKey() === key ) {
                matchingTask = task;
                return task;
            }
            return null;
        });
        return matchingTask;
    }

    // Edit task name of matching key
    editName(key, name) {
        this.getTask(key).editName(name);
        for(const [objKey, value] of Object.entries(this.locallyStoredTasks)) {
            if(parseInt(objKey) === key) {
                value.name = name;
            }
        }
        localStorage.removeItem('storedTasks');
        localStorage.setItem('storedTasks', JSON.stringify(this.locallyStoredTasks));
    }

    setIsDone(key) {
        this.getTask(key).setIsDone();
        for(const [objKey, value] of Object.entries(this.locallyStoredTasks)) {
            if(parseInt(objKey) === key) {
                value.isDone = true;
            }
        }
        localStorage.removeItem('storedTasks');
        localStorage.setItem('storedTasks', JSON.stringify(this.locallyStoredTasks));
    }

    unsetIsDone(key) {
        this.getTask(key).unsetIsDone();
        for(const [objKey, value] of Object.entries(this.locallyStoredTasks)) {
            if(parseInt(objKey) === key) {
                value.isDone = false;
            }
        }
        localStorage.removeItem('storedTasks');
        localStorage.setItem('storedTasks', JSON.stringify(this.locallyStoredTasks));
    }

    deleteTask(key) {
        this.tasks = this.tasks.filter(task => task.key !== key);
        for(const [locallyStoredTaskKey] of Object.entries(this.locallyStoredTasks)) {
            if(parseInt(locallyStoredTaskKey) === key) {
                delete this.locallyStoredTasks[key];
            }
        }
        localStorage.removeItem('storedTasks');
        localStorage.setItem('storedTasks', JSON.stringify(this.locallyStoredTasks));
    }

    // Console debugger: Only used for development purposes
    debugStorage() {
        console.log('Locally Stored Tasks: ', this.locallyStoredTasks);
        console.log('Tasks: ', this.tasks);
    }

    // Console debugger: Only used for development purposes
    debug() {
        this.tasks.map(task => {
            task.debug();
            return null;
        });
    }
}

export default TaskTrackerService;