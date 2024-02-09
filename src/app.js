const mongoose = require('mongoose');

// connection creation or new database create 
mongoose.connect("mongodb://localhost:27017/myDatabase")
.then(() => {
    console.log("connection successfull...");
})
.catch((err) => {
    console.log(err);
});

// to create Schema Use mongoose.schema({})
const playlistSchema = new mongoose.Schema({
    name : String,
    ctype : String,
    videos : Number,
    active : Boolean,
    date :  {
        type:Date,
        default:Date.now
    }
})

// to create Collection use mongoose.model("collection_name", Schema). And model method return class and with the help of that class we make object which is used to create documents.

const Playlist = new mongoose.model("Playlist",playlistSchema); 

// let name = "React js";

// create a document or insert a document
const createDocument = async () => {
    try {
        const reactPlaylist = new Playlist({
            name : "Node JS",
            ctype : "Back End",
            videos : 50,
            active : true
        });
        
        const result = await reactPlaylist.save();
        console.log(result);
    } catch(err) {
        console.log(err);
    }
    
}

createDocument();
