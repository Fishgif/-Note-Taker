const path = require('path')
const express = require('express');

const webRouter = require('./routes/web')
const apiRouter = require('./routes/api')

const app = express();

// config variables

const PORT = 3001;

// const PORT = process.env.PORT||3001;


// call Middleware
app.use( express.static('public'));

app.use(express.json());

app.use(webRouter);
app.use(apiRouter);

// app.get('/', (req, res) => {

//     const indexHtmlPath = path.join(__dirname, 'public', 'index.html');
   
//     res.sendFile(indexHtmlPath)
// })

// app.get('/notes', (req, res) => {

// const notesHtmlPath = path.join(__dirname, 'public', 'notes.html')
// res.sendFile(notesHtmlPath);
// }) 

// Run business logic
app.listen(PORT, function(){
  console.log(`App is running on http://localhost:${PORT}`);
});
 












