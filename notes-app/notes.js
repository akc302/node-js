//const { require } = require("yargs")

const fs = require('fs')
const chalk = require('chalk')
// const getNotes = function(){

//     return 'Your notess.....'
// }

const getNotes = () => {
    return 'Your notess.....'
}

const addNote = (title,body) =>{
    const notes = loadNotes()
    //console.log(notes);
    //check duplicate
    // const duplicateNotes = notes.filter(function (note){
    //     return note.title === title
    // })

    // const duplicateNotes = notes.filter((note) => 
    //     note.title === title)

    const duplicateNote = notes.find((note) => 
        note.title === title)
    
    debugger  //to open this run (chrome://inspect)

    if (!duplicateNote){
        notes.push({
            title: title,
            body: body
         })
         saveNotes(notes)
         console.log(chalk.green.inverse("New note added!"));
    }else{
        console.log(chalk.red.inverse('Note title taken!'));
    }
}

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => { 
    try{
        const databuffer = fs.readFileSync('notes.json')
        const dataJSON =databuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        //console.log('There is no file such as notes.json');
        return []
    }
}


const removeNote = (title) => {
    //console.log(title);
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => 
        note.title !== title)
    
    
    if (notes.length > notesToKeep.length){
        saveNotes(notesToKeep)
        console.log(chalk.green.inverse('Node removed'));
    }else{
        console.log(chalk.red.inverse('No Node removed'));
    }

}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse('Your notes'));
    notes.forEach((note) => {
        console.log(note.title);
    })
}



const readNotes =(title) => {
    const notes = loadNotes()
    const noteA = notes.find((note)=> note.title === title)
    if (noteA){
        console.log(chalk.inverse(noteA.title));
        console.log(noteA.body);
    }else{
        console.log(chalk.red.inverse('note not found'));
    }

}


module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}