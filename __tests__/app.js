"use strict";
const path = require ("path");
const assert = require ("yeoman-assert");
const helpers = require ("yeoman-test");

describe ("generator-openfl:app", () => {

	describe ("TypeScript", () => {

		beforeAll (() => {

			return helpers.run (path.join (__dirname, "../generators/app"))
				.withPrompts ({name: "hello-openfl", language: "TypeScript"});

		});

		it ("creates files", () => {

			assert.file ([
				".gitignore",
				"package.json",
				"tsconfig.json",
				"webpack.config.js",
				"public/index.html",
				"public/favicon.png",
				"src/app.ts"
			]);

		});

	});

	describe ("ES6", () => {

		beforeAll (() => {

			return helpers.run (path.join (__dirname, "../generators/app"))
				.withPrompts ({name: "hello-openfl", language: "ES6/JavaScript"});

		});

		it ("creates files", () => {

			assert.file ([
				".babelrc",
				".gitignore",
				"package.json",
				"webpack.config.js",
				"public/index.html",
				"public/favicon.png",
				"src/app.js"
			]);

		});

	});

	describe ("ES5", () => {

		beforeAll (() => {

			return helpers.run (path.join (__dirname, "../generators/app"))
				.withPrompts ({name: "hello-openfl", language: "ES5/JavaScript"});

		});

		it ("creates files", () => {

			assert.file ([
				".gitignore",
				"package.json",
				"webpack.config.js",
				"public/index.html",
				"public/favicon.png",
				"src/app.js"
			]);

		});

	});

	describe ("Haxe", () => {

		beforeAll (() => {

			return helpers.run (path.join (__dirname, "../generators/app"))
				.withPrompts ({name: "hello-openfl", language: "Haxe"});

		});

		it ("creates files", () => {

			assert.file ([
				".gitignore",
				"build.hxml",
				"package.json",
				"webpack.config.js",
				"public/index.html",
				"public/favicon.png",
				"src/App.hx"
			]);

		});

	});

	describe ("AS3/Royale", () => {

		beforeAll (() => {

			return helpers.run (path.join (__dirname, "../generators/app"))
				.withPrompts ({name: "hello-openfl", language: "AS3/Royale"});

		});

		it ("creates files", () => {

			assert.file ([
				".gitignore",
				"asconfig.json",
				"package.json",
				"template.html",
				"favicon.png",
				"src/App.as",
				"src/Main.as"
			]);

		});

	});

});
