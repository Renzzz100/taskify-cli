export class Task {
	constructor(id, title, completed = false) {
		this.id = id;
		this.title = title;
		this.completed = completed;
		this.createdAt = new Date().toISOString();
	}

	toggle() {
		this.completed = !this.completed;
	}
}
