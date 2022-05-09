const path = require('path')
const express = require('express');
const app = express();
const webRouter = require('./routes/web')
const apiRouter = require('./routes/api')


// config variables

const PORT = process.env.PORT||3001;

app.use(webRouter);
app.use(apiRouter);

// call Middleware
app.use( express.static('public'));

app.get('/', (req, res) => {

    const indexHtmlPath = path.join(__dirname, 'public', 'index.html');
    console.log('aaaa')
    res.sendFile(indexHtmlPath)
})

app.get('/notes', (req, res) => {

const notesHtmlPath = path.join(__dirname, '..', 'public', 'notes.html')
res.sendFile(notesHtmlPath);
})

app.use(express.json());

// Run business logic
app.listen(PORT, function(){
  console.log(`App is running on http://localhost:${PORT}`);
});
 












