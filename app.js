const fs = require('fs');
const notes = require('./notes');
const yargs = require('yargs');
const { argv } = require('./commands');

const {
  ADD_NOTE,
  LIST_NOTE,
  READ_NOTE,
  REMOVE_NOTE,
} = require('./consts');

const [command] = argv._;

switch (command) {
  case ADD_NOTE:
    return (
      notes.addNote(argv.title, argv.body)
        ? console.log('Note created') || notes.logNote(note)
        : console.log('Note title taken')
    );

  case LIST_NOTE:
    return notes.getAll().forEach(note => notes.logNote(note));

  case READ_NOTE:
    return (
      notes.getNote(argv.title)
        ? console.log('Note found') || notes.logNote(note)
        : console.log('Note not found')
    );

  case REMOVE_NOTE:
    return (
      notes.removeNote(argv.title)
        ? console.log('Note removed')
        : console.log('Note not found')
    );

  default:
    return console.log('Command not found');
}
