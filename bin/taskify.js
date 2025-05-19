#!/usr/bin/env node
import { handleCommand } from "../src/cli/commands.js";

const args = process.argv.slice(2);
handleCommand(args);