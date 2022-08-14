
/*
const fs = require('fs')
fs.writeFileSync('notes.txt',' My name is nafi');
fs.appendFileSync('notes.txt',' I live in USA')

//export variable from another js 
const add = require('./utils.js')
const sum = add(4 , -2)
console.log(sum);
const validator = require('validator')
//if its a valid email then return true!
//console.log(validator.isEmail('ashrafchowdhury302@gmail.com'));
//return true if the website is ok!
//console.log(validator.isURL('https://www.npmjs.com/packag

*/
//chalk module style!
const chalk = require('chalk')
const { argv } = require('process')
const yargs = require('yargs')
const notes = require('./notes.js')



/*
const nmsg = getNotes()
const msg = chalk.bold.green('success');
console.log(msg);
console.log(nmsg);

//console.log(process.argv[2]);


//global npm modules and nodemon
//--> its automatically reload the file, so dont need to run again


//taking input from user
const command = process.argv[2]
if (command === 'add'){
    console.log('adding nodes');
}else if(command === 'remove'){
    console.log('removing ndoes');
}
*/
yargs.version('1.1.0')
//argument passing with yargs
//console.log(process.argv);
//add, remove, list , read

//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true, //without title it will say missing
            type: 'string'
        },
        body:{
            description: 'described',
            demandOption: true,
            type: 'string'
        }
    },

    // handler: function(argv){
    //     notes.addNote(argv.title, argv.body)
    // }

    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'remove a node',
    builder:{
        title:{
        describe: 'Note title',
        demandOption: true,
        type: 'string'
        }
    }, 

    handler(argv){
        notes.removeNote(argv.title)
        console.log('removing a node!');
    }
})

//create a list command
yargs.command({
    command: 'list',
    describe: 'list your node',
    handler(){
        //console.log("listing the nodes!");
        notes.listNotes()
    }
})

//create read command
yargs.command({
    command: 'read',
    describe: 'reading the nodes',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        console.log('reading a node!');
        notes.readNotes(argv.title)
    }
})

yargs.parse() //printing like log


//console.log(yargs.argv);


//storing data with json find it in playground/json.js















