import fs from "fs";
import path from "path";

export class FileStorage {
	constructor(filePath) {
		this.path = path.resolve(filePath);
		if (!fs.existsSync(this.path)) {
			fs.mkdirSync(path.dirname(this.path), { recursive: true });
			fs.writeFileSync(this.path, "[]", "utf-8");
		}
	}

	load() {
		const data = fs.readFileSync(this.path, "utf-8");
		return JSON.parse(data);
	}

	save(data) {
		fs.writeFileSync(this.path, JSON.stringify(data, null, 2), "utf-8");
	}
}
