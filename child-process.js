//'use strict';
/*global process*/
//imports
// var fs = require('fs');
// var util = require('util');
var spawn = require('child_process').spawn;
//implementation


function exportPDF(path, callback) {
	console.log('exportPDF is called');
	callback = callback || function() {};
	// temporary file name. use process PID as part of the name so there
	// wont' be conflicts if two processes run in parallel
	// var tmpfile = path + '.tmp.' + process.pid;

	var cmd = 'wkhtmltopdf';
	// executes command 'generator path -O Landscape http://www.mysite.com/ report.pdf'
	var generator = spawn(cmd, [
		'-O',
		'Landscape',
		'http://localhost:8080/AEC_Page.html',
		path
	]);

	// capture stdout and stderr. Note that generator does not have any output on success
	generator.stdout.setEncoding('utf8');
	generator.stdout.on('data', function(data) {
		console.log('on(data)');
		console.log(cmd + ': stdout ' + path + ' ' + data.trim());
	});

	generator.stderr.setEncoding('utf8');
	generator.stderr.on('data', function(data) {
		console.log('onError');
		if (/^execvp\(\)/.test(data)) {
			// we get here if 'generator' command was not found or could
			// not be executed
			console.log(cmd + ': failed to start: ' + data);
		} else {
			console.log(cmd + ': stderr ' + path + ' ' + data.trim());
		}
	});

	// hook on process exit
	generator.on('exit', function(code) {
		console.log();
		if (code) {
			// 127 means spawn error, command could not be executed
			console.log(cmd + ': error ' + path + ' ' + code);
			return callback(code);
		}
	});
}
var cwd = process.cwd();
exportPDF(cwd + '/report.pdf');
//exports