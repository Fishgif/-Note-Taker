const express = require('express');
const path = require ('path')
const router = express.Router();
const fs = require('fs');
const { v4 } = require('uuid');
const { stringify } = require('querystring');
const res = require('express/lib/response');

 
const dbPath = path.join(__dirname, '..', 'db', 'db.json');


/**
 * 
 * @returns {Array}
 */

function getNotes(){
return JSON.parse(fs.readFileSync(dbPath, 'utf8'));

}

function saveNotesToDb(notes){
fs.writeFileSync(dbPath, JSON.stringify(notes), 'utf8');

}
 
router.get('/api/notes', (req, res) => {
    
 res.json(getNotes());

})

router.post('/api/notes', (req, res) => {
  
  // create new Note
console.log(req.body)

  // read request body for note title and text
// const title = req.body.title
// const text = req.body.text

  const {title, text} = req.body;
  // generate id
const newNote = {
id: v4(),
title: title,
text: text,
}
  // save new note to existing notes array
const notes = getNotes();

notes.push(newNote);

saveNotesToDb(notes);
res.json({
  data: 'Good',
})
});

router.delete('/api/notes/:id', (req, res) => {

// get all the notes
const notes = getNotes();

// filter get target note

const result = notes.filter((note) => {
return note.id !== req.params.id
});
// resave
saveNotesToDb(result)

res.json({
  data: 'Good',
})

});

module.exports = router;




















