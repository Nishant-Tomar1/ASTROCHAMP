import { Schema, model } from "mongoose";

const noteSchema  = new Schema({
  Name : {
    type : String,
    required : true
  },
  email : {
    type: String,
    required: true,
    lowercase:true,
    index:true,
  },
  message: {
    type:String, 
    required:true
  }, 
});

export const Note = model('Note', noteSchema);
