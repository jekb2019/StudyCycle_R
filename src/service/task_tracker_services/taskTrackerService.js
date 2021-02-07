import Task from './task';

class TaskTrackerService {
    constructor () {
        this.tasks = [];
        this.locallyStoredTasks = {}
        if(localStorage.getItem('storedTasks')) {
            for(const [key, value] of Object.entries(JSON.parse(localStorage.getItem('storedTasks')))) {
                this.addTask(value.name, key, value.isDone);
            }
        } else {
            this.initializeTaskTracker('Initial Task');
        }
        this.debug();
    }

    initializeTaskTracker(name) {
        const task = new Task(name);
        this.tasks.unshift(task);
        this.locallyStoredTasks[task.getKey()] = {
            key: task.getKey,
            name: task.getName(),
            isDone: task.getIsDone()
        };

        localStorage.setItem('storedTasks', JSON.stringify(this.locallyStoredTasks));
    }

    // Create a new task object and add to task array
    addTask(name, key, isDone) {
        let task;
        if(key === undefined) {
            task = new Task(name);
        } else {
            task = new Task(name, key, isDone);
        }
        this.tasks.unshift(task);

        this.locallyStoredTasks[task.getKey()] = {
            key: task.getKey,
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
            if(objKey === key) {
                value.name = name;
            }
        }
        localStorage.removeItem('storedTasks');
        localStorage.setItem('storedTasks', JSON.stringify(this.locallyStoredTasks));
    }

    setIsDone(key) {
        this.getTask(key).setIsDone();
    }

    unsetIsDone(key) {
        this.getTask(key).unsetIsDone();
    }

    deleteTask(key) {
        this.tasks = this.tasks.filter(task => task.key !== key);
        for(const [objKey, value] of Object.entries(this.locallyStoredTasks)) {
            if(objKey === key) {
                delete this.locallyStoredTasks[key];
            }
        }
        localStorage.removeItem('storedTasks');
        localStorage.setItem('storedTasks', JSON.stringify(this.locallyStoredTasks));
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