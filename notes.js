var fs = require('fs');

console.log('Starting notes.js');

//Read note from the JSON File
var fetchNotes = () => {
    try{
        return JSON.parse(fs.readFileSync('notes-data.json'));
    } catch(e) {
        return [];
    }
}

//Save Note to JSON File
var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

//Adding A New Note to the file
var addNote = (title, body) => {
    notes = [];
    note = {
        title: title,
        body: body
    };

    notes = fetchNotes();

    var duplicateNotes = notes.filter(function(note){
        return note.title === title;
    });

    if (duplicateNotes.length === 0){
        notes.push(note);
        saveNotes(notes);
        return note;
    }
}


//Removing a note from the file
var removeNote = (title) => {
    notes = fetchNotes();
    filterNotes = notes.filter(function (note){
        return note.title !== title;
    });
    saveNotes(filterNotes);

    return (notes.length === filterNotes.length);

};

//Listing all the notes available in the file
var listNote = () => {
    notes = fetchNotes();
    return notes;
}

//Reading all the notes from the file
var readNote = (title) => {
    notes = fetchNotes();
    filterNotes = notes.filter(function (note){
        return note.title === title;
    });
    return filterNotes[0];
}

module.exports = {
    addNote,
    removeNote,
    listNote,
    readNote
};