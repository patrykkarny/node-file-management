const fs = require('fs');

const fetchNotes = () => {
  try {
    return JSON.parse(fs.readFileSync('notes-data.json'));
  } catch (e) {
    return [];
  }
}

const saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

const addNote = (title, body) => {
  let notes = fetchNotes();

  const isNoteExist = notes.some(note => note.title === title);

  if (isNoteExist) return;

  const note = { title, body };

  notes = [
    ...notes,
    note,
  ];

  saveNotes(notes);

  return note;
};

const getAll = () => fetchNotes();

const getNote = (title) => {
  const notes = fetchNotes();
  const [note] = notes.filter(note => note.title === title);

  return note;
};

const removeNote = (title) => {
  const notes = fetchNotes();
  const filteredNotes = notes.filter(note => note.title !== title);

  saveNotes(filteredNotes);

  return notes.length !== filteredNotes.length;
};

const logNote = (note) => {
  console.log('------');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote,
};
