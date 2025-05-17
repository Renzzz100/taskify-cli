import chalk from "chalk";
import gradient from "gradient-string";
import boxen from "boxen";
import figlet from "figlet";
import ora from "ora";

export const logger = {
	log: (msg) => console.log(chalk.blue("ℹ️  " + msg)),

	success: (msg) => console.log(chalk.green("✅ " + msg)),

	error: (msg) => console.error(chalk.red("❌ " + msg)),

	title: (msg) => console.log(chalk.bold.yellow(`\n🔹 ${msg}`)),

	divider: () =>
		console.log(chalk.gray("────────────────────────────────────────")),

	box: (msg) => {
		console.log(
			boxen(chalk.white(msg), {
				padding: 1,
				margin: 1,
				borderStyle: "round",
				borderColor: "cyan",
			})
		);
	},

	gradientTitle: (msg) => {
		console.log(gradient.pastel.multiline(figlet.textSync(msg)));
	},

	spinner: (msg) => ora(msg).start(),
};
