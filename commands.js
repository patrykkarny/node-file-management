const yargs = require('yargs');
const {
  ADD_NOTE,
  LIST_NOTE,
  READ_NOTE,
  REMOVE_NOTE,
} = require('./consts');

const title = {
  describe: 'Title of note',
  demand: true,
  alias: 't',
};
const body = {
  describe: 'Body of note',
  demand: true,
  alias: 'b',
};

const argv = yargs
  .command(ADD_NOTE, 'Add new note', {
    title,
    body,
  })
  .command(LIST_NOTE, 'List all notes')
  .command(READ_NOTE, 'Read a note', {
    title,
  })
  .command(REMOVE_NOTE, 'Remove a note', {
    title,
  })
  .help()
  .argv;

module.exports = {
  argv,
};
