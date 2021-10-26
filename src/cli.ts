#!/usr/bin/env node

import { create } from "create-create-app";
import { resolve } from "path";

const templateRoot = resolve(__dirname, "..", "templates");

const caveat = `
Your new template has been created!
Thanks for using alii/node-template

If this was useful, please give me a ⭐️
or consider supporting via GitHub sponsors
`;

void create("create-node-template", {
	templateRoot,
	caveat,

	modifyName: name => name.toLowerCase(),

	extra: {
		github: {
			type: "input",
			describe: "github username",
			prompt: "if-empty",
		},
	},
});
