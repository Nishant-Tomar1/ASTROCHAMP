const mongoose = require("mongoose");

const noteSchema  = new mongoose.Schema({
  Name : {
    type : String,
    required : true
  },
  email : {
    type: String,
    required: true,
    unique:true,
    lowercase:true,
    index:true,
  },
  message: {
    type:String, 
    required:true
  }, 
});

const Note= mongoose.model('Note', noteSchema);

module.exports = Note; 