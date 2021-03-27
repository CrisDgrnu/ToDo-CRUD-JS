import Alert from './alert.js';

export default class AddTodo {
    constructor() {
        this.btn = document.getElementById('add');
        this.title = document.getElementById('title');
        this.description = document.getElementById('description');

        this.alertError = new Alert('alert-error');
        this.alertEmpty = new Alert('alert-empty');
    }

    onClick(callback) {
        this.btn.onclick = () => {
            if (!this.title.value || !this.description.value) {
                this.alertError.show('Title and description are required');
            } else {
                this.alertError.hide();
                this.alertEmpty.hide();
                callback(this.title.value,this.description.value);
            }
        }
    }
}