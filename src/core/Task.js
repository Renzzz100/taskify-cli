export class Task {
	constructor(id, title, completed = false) {
		this.id = id || Task.create();
		this.title = title;
		this.completed = completed;
	}

	toggle() {
		this.completed = !this.completed;
	}

	static create(length = 6) {
		let id = '';
		for (let i = 0; i < length; i++) {
		  id += Math.floor(Math.random() * 10); // angka 0-9
		}
		return id;
	}
}
