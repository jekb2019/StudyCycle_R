class TaskTrackerService {
    constructor (defaultTaskName) {
        this.tasks = new Array(new Task(defaultTaskName));
    }

    editName(name, key) {
        this.getTask(key).editName(name);
    }

    setIsEditable(key) {
        this.getTask(key).setIsEditable();
    }

    unsetIsEditable(key) {
        this.getTask(key).unsetIsEditable();
    }

    setIsDone(key) {
        this.getTask(key).setIsDone();
    }

    unsetIsDone(key) {
        this.getTask(key).unsetIsDone();
    }

    deleteTask(key) {
        const tempTasks = this.tasks.filter(task => task.key !== key);
        this.tasks = tempTasks;
    }

    getTask(key) {
        let matchingTask = null;
        this.tasks.map(task => {
            if(task.getKey() === key ) {
                matchingTask = task;
                return task;
            }
        })
        return matchingTask;
    }

    createTask(name) {
        const task = new Task(name);
        this.tasks.unshift(task);
        return task.getKey();
    }

}