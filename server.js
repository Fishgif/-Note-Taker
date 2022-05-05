const path = require('path')
const express = require('express');
const app = express();

// config variables

const PORT = process.env.PORT||3001;

app.use( express.static('public'));

app.get('/', (req, res) => {

    const indexHtmlPath = path.join(__dirname, 'public', 'index.html');
    console.log('aaaaa')
    res.sendFile(indexHtmlPath)
})

app.use(express.json());

app.get('/notes', (req, res) => {

const notesHtmlPath = path.join(__dirname, 'public', 'notes.html')
res.sendFile(notesHtmlPath);
})

app.listen(PORT, function(){
  console.log(`App is running on http://localhost:${PORT}`);
});













