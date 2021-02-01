import Task from './task';

class TaskTrackerService {
    constructor () {
        this.tasks = [];
        this.addTask('Initial Task');
        this.debug();
    }
    
    // Create a new task object and add to task array
    addTask(name) {
        const task = new Task(name);
        this.tasks.unshift(task);
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
        })
        return matchingTask;
    }

    // Edit task name of matching key
    editName(key, name) {
        this.getTask(key).editName(name);
    }

    setIsDone(key) {
        this.getTask(key).setIsDone();
    }

    unsetIsDone(key) {
        this.getTask(key).unsetIsDone();
    }

    deleteTask(key) {
        this.tasks = this.tasks.filter(task => task.key !== key);
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