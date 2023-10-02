"use strict";
const Generator = require ("yeoman-generator");

module.exports = class extends Generator {

	prompting () {

		this.log ("\x1b[37m .d88 88b.                             \x1b[0m\x1b[1;36m888888b 888 \x1b[0m");
		this.log ("\x1b[37md88P\" \"Y88b                            \x1b[0m\x1b[1;36m888     888 \x1b[0m");
		this.log ("\x1b[37m888     888                            \x1b[0m\x1b[1;36m888     888 \x1b[0m");
		this.log ("\x1b[37m888     888 88888b.   .d88b.  88888b.  \x1b[0m\x1b[1;36m8888888 888 \x1b[0m");
		this.log ("\x1b[37m888     888 888 \"88b d8P  Y8b 888 \"88b \x1b[0m\x1b[1;36m888     888 \x1b[0m");
		this.log ("\x1b[37m888     888 888  888 88888888 888  888 \x1b[0m\x1b[1;36m888     888 \x1b[0m");
		this.log ("\x1b[37mY88b. .d88P 888 d88P Y8b.     888  888 \x1b[0m\x1b[1;36m888     888 \x1b[0m");
		this.log ("\x1b[37m \"Y88 88P\"  88888P\"   \"Y8888  888  888 \x1b[0m\x1b[1;36m888     \"Y888P \x1b[0m");
		this.log ("\x1b[37m            888                                   ");
		this.log ("\x1b[37m            888                                   \x1b[0m");

		this.log ("");

		const prompts = [{
			type: "input",
			name: "name",
			message: "Your project name",
			default: this.appname
		},
		{
			type: "list",
			name: "language",
			message: "Source language",
			choices: [
				"TypeScript",
				"Haxe",
				"ES6/JavaScript",
				"ES5/JavaScript",
				"AS3/Royale"
			],
			default: "TypeScript"
		}];

		return this.prompt (prompts).then (props => {

			this.props = props;
			this.packageName = this.props.name.replace (" ", "").toLowerCase ();

		});

	}

	writing () {

		const templateContext = {
			name: this.props.name,
			packageName: this.packageName
		};

		switch (this.props.language) {

			case "ES5/JavaScript":
				this.fs.copyTpl (
					this.templatePath ("es5/**/*"),
					this.destinationRoot (),
					templateContext,
					undefined,
					{
						globOptions: {
							dot: true,
							ignore: ["**/dot_gitignore"]
						}
					}
				);
				this.fs.copy (this.templatePath ("es5/dot_gitignore"), this.destinationPath (".gitignore"));
				break;

			case "ES6/JavaScript":
				this.fs.copyTpl (
					this.templatePath ("es6/**/*"),
					this.destinationRoot (),
					templateContext,
					undefined,
					{
						globOptions: {
							dot: true,
							ignore: ["**/dot_gitignore"]
						}
					}
				);
				this.fs.copy (this.templatePath ("es6/dot_gitignore"), this.destinationPath (".gitignore"));
				break;

			case "Haxe":
				this.fs.copyTpl (
					this.templatePath ("haxe/**/*"),
					this.destinationRoot (),
					templateContext,
					undefined,
					{
						globOptions: {
							dot: true,
							ignore: ["**/dot_gitignore"]
						}
					}
				);
				this.fs.copy (this.templatePath ("haxe/dot_gitignore"), this.destinationPath (".gitignore"));
				break;

			case "TypeScript":
				this.fs.copyTpl (
					this.templatePath ("typescript/**/*"),
					this.destinationRoot (),
					templateContext,
					undefined,
					{
						globOptions: {
							dot: true,
							ignore: ["**/dot_gitignore"]
						}
					}
				);
				this.fs.copy (this.templatePath ("typescript/dot_gitignore"), this.destinationPath (".gitignore"));
				break;

			case "AS3/Royale":
				this.fs.copyTpl (
					this.templatePath ("as3/**/*"),
					this.destinationRoot (),
					templateContext,
					undefined,
					{
						globOptions: {
							dot: true,
							ignore: ["**/dot_gitignore"]
						}
					}
				);
				this.fs.copy (this.templatePath ("as3/dot_gitignore"), this.destinationPath (".gitignore"));
				break;

			default:
				throw new Error ("Unknown language: " + this.props.language);

		}

	}

	install () {

		this.npmInstall ();

	}

};
