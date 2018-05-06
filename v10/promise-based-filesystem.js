#! /usr/bin/env node
const fsPromises = require('fs/promises');
const path = require('path');

function getUsers(params) {
	const userResult = fsPromises.readFile(path.join(__dirname, './../data/users.json'), 'utf8');
	// with promise style
	userResult.then((results) => {
		results = JSON.parse(results);
		results = results || [];
		console.log('Users');
		console.log(results[0]);
		return results
	})	
}

function createUserSettings(params) {
	console.log('createUserSettings');
	const settings = {
		userId: 1,
		theme: 'black',
		updatedAt: Date.now(),
	};

	const fileUrl = path.join(__dirname, './../data/user-setting.json');

	return fsPromises
		.writeFile(fileUrl, JSON.stringify(settings))
		.then((result) => {
			console.log('write file result');
			console.log(result);
			return result;
		});
}

async function loadUserSetting() {
	console.log('loadUserSetting');
	// with async style,
	const result = await fsPromises.readFile(path.join(__dirname, './../data/user-setting.json'), 'utf8');

	console.log('loaded user setting');
	console.log(result);

	return result;
}

console.log('----------');
console.log('Demo Promised-base fs');
console.log('----------');

getUsers();
createUserSettings()
	.then(() => {
		// loadUserSetting is async function, to get actual result we need to use then()
		loadUserSetting();
	});

setInterval(() => {
	console.log('----');
}, 1000);