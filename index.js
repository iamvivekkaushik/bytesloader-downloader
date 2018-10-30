const yargs = require('yargs');
var open = require("open");

const argv = yargs.options({
    c: {
        demand: true,
        alias: 'chapter',
        describe: 'Chapter name you want to encode.',
        string: true
    },
    f: {
        demand: true,
        alias: 'file',
        describe: 'file name you want to encode.',
        string: true
    }
}).help().alias('help', 'h').argv;

const host = 'https://www.bytesloader.com/downloads/';
var accPath = '4f41e9b79c640977956a0248ebb9624fe98210e0';
var encodedCourseName = '[FreeCourseSite.com]%20Udemy%20-%20Angular%206%20(formerly%20Angular%202)%20-%20The%20Complete%20Guide'
var encodedChapter = encodeURIComponent(argv.c);
var encodedFile = encodeURIComponent(argv.f);
var token = 'appVjlTLN5BINy0H4jW-TA';

var url = host + accPath +"/"+ encodedCourseName +"/" + encodedChapter + "/" + encodedFile + "?st="+ token +"&e=1540977295"

console.log(url);

console.log('\x1b[32m%s\x1b[0m', 'Opening link in Chrome....');

open(url);