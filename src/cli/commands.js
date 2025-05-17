import { TaskManager } from "../core/TaskManager.js";
import { logger } from "../utils/logger.js";
import chalk from "chalk";

const manager = new TaskManager();

export function handleCommand(args) {
	const [command, ...rest] = args;

	switch (command) {
		case "add":
			const title = rest.join(" ");
			if (!title) return logger.error("Task title is required.");
			const task = manager.addTask(title);
			logger.success(`Added: ${task.title}`);
			break;

		case "list":
			const tasks = manager.listTasks();
			if (!tasks.length) return logger.log("No tasks found.");

			logger.title("📋 Daftar Tugas");
			logger.divider();

			tasks.forEach((t) => {
				const status = t.completed
					? chalk.green("✔ Done")
					: chalk.yellow("⏳ Pending");
				console.log(
					`${chalk.gray(`#${t.id}`)} - ${chalk.bold(t.title)} [${status}]`
				);
			});

			logger.divider();
			break;

		case "toggle":
			const toggled = manager.toggleTask(rest[0]);
			toggled
				? logger.success(`Toggled: ${toggled.title}`)
				: logger.error("Task not found.");
			break;

		case "delete":
			const deleted = manager.deleteTask(rest[0]);
			deleted
				? logger.success(`Deleted: ${deleted.title}`)
				: logger.error("Task not found.");
			break;

		case "help":
		default:
			logger.gradientTitle("Taskify CLI");
			logger.box("Sederhana. Cepat. Produktif. ✅");

			console.log(chalk.cyanBright(`\n📖 Usage:`));
			console.log("  taskify <command> [args]\n");

			console.log(chalk.magenta("📦 Commands:"));
			console.log(
				chalk.white("  add <task>      ") + chalk.gray("Add a new task")
			);
			console.log(
				chalk.white("  list            ") + chalk.gray("List all tasks")
			);
			console.log(
				chalk.white("  toggle <id>     ") +
					chalk.gray("Toggle completion status")
			);
			console.log(
				chalk.white("  delete <id>     ") + chalk.gray("Delete a task")
			);
			console.log(
				chalk.white("  help            ") + chalk.gray("Show this help menu")
			);

			logger.divider();
	}
}
