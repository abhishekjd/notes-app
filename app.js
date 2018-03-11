var fs = require('fs');
var _ = require('lodash');
const argv = require('yargs').argv;


var notes = require('./notes.js');

var command = argv._[0];
console.log('Command: ', command);
// console.log(argv);

if (command === 'add'){
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log('Note Added Successfully');
        console.log('Title' + note.title);
        console.log('Body' + note.body);
    } else {
        console.log('Duplicate Title Already Exist');
    }
} else if (command === 'remove'){
    var removedNote = notes.removeNote(argv.title);
    if (removedNote){
        console.log('Note successfully removed');
    } else {
        console.log('Note does not exist');
    }
} else if (command === 'list'){
    var allNotes = notes.listNote();
    console.log('Printing ' + allNotes.length + 'notes available');
    allNotes.forEach(function (note) {
        console.log(note.title);
        console.log(note.body);
        console.log('----')
    })
} else if (command === 'read'){
    var readNote = notes.readNote(argv.title);
    if (readNote) {
        console.log('Note reading complete: ' + readNote.title);
    } else {
        console.log('Note not found');
    }
} else {
    console.log("Invalid Input");
}
