//Load env variables
if (process.env.NODE_ENV != 'production'){
    require('dotenv').config();
}

//Import dependencies
const express = require('express');
const cors = require('cors');
const connectToDb = require("./config/connectToDb");
const notesController = require("./controllers/notesController");

//Create an express app
const app = express();

//Configure express app
app.use(express.json());
app.use(cors());

//Connect to Database
connectToDb();

// Routing 

app.get('/', notesController.homepageMessage);

app.post("/notes", notesController.createNote);

app.get("/notes", notesController.fetchNotes);

// app.get("/notes/:id",notesController.fetchNote);

// app.put('/notes/:id',notesController.updateNote);

// app.delete('/notes/:id', notesController.deleteNote);

// Start our server
app.listen(process.env.PORT);