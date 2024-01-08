import { connect } from "mongoose";
import { DB_NAME } from "../constants.js";

async function connectToDb(){
    try{       
        const connectionInstance = await connect(`${process.env.DB_URL}/${DB_NAME}`)
        console.log(`MongoDB database connected!! Db URL : ${connectionInstance.connection.host}`)

    }catch(err) {
        console.log("MongoDB connection Failed !!!: ",err);
        process.exit(1)
    }
}

export default connectToDb;
