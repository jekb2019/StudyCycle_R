class Task {    
    constructor(name) {
        this.name = name;
        this.key = new Date().getTime();
        this.isEditable = false;
        this.isDone = false;
    }

    setIsEditable() {
        if(!this.isEditable) {
            this.isEditable = true;
        }
    }

    unsetIsEditable() {
        if(this.isEditable) {
            this.isEditable = false;
        }
    }

    editName(name) {
        if(this.isEditable) {
            this.name = name;
        }
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
}