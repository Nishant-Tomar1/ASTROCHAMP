import {Note} from "../models/note.js"

//Homepage message
const homepageMessage = async (req, res) => {
    //Respond with them
    res.json({Backend : "Working Succesfully"});
};

//Fetch all data in Notes
const fetchNotes = async (req, res) => {
    //Find the notes
    const notes = await Note.find();
    //Respond with them
    res.json({ notes }); 
};


//Create a note
const createNote =  async (req, res) =>{
    //Get the sent in data off request body
    const {Name, email, message} = req.body ; 

    //Create a note with it
    const note = await Note.create({
        Name,
        email,
        message,
    });

    //respond with the new note
    res.json({note});
};

export {
    homepageMessage,
    fetchNotes,
    createNote,
};

