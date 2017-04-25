var packageSettings = require('./package.json');
var path = require('path');
//var exportPath = '\\\\study.merlion.ru\\c$\\WebSoft\\WebTutorServer\\wt\\web\\react';
var exportPath = path.join(__dirname, 'dist');

module.exports = {
	htmlFileName: 'pindex.html',
	localPath: path.join(__dirname, 'dist'),
	remotePath: path.join(exportPath, packageSettings.name, 'client')
}