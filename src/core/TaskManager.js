import { Task } from "./Task.js";
import { FileStorage } from "../storage/FileStorage.js";

export class TaskManager {
	constructor(storagePath = "data/tasks.json") {
		this.storage = new FileStorage(storagePath);
		this.tasks = this.storage.load() || [];
	}

	addTask(title) {
		const id = Date.now().toString();
		const task = new Task(id, title);
		this.tasks.push(task);
		this.storage.save(this.tasks);
		return task;
	}

	listTasks() {
		return this.tasks;
	}

	toggleTask(id) {
		const task = this.tasks.find((t) => t.id === id);
		if (task) {
			task.toggle();
			this.storage.save(this.tasks);
			return task;
		}
		return null;
	}

	deleteTask(id) {
		const index = this.tasks.findIndex((t) => t.id === id);
		if (index !== -1) {
			const removed = this.tasks.splice(index, 1);
			this.storage.save(this.tasks);
			return removed[0];
		}
		return null;
	}
}
