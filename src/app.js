//             Mongoose and mongoDB tutorial with node and express js by thapatechnical.
// -------------------------------------------------------------------------------------------------

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
        // ..................insert single document in collection.............
        // const reactPlaylist = new Playlist({
        //     name : "Express JS",
        //     ctype : "Back End",
        //     videos : 30,
        //     active : true
        // });

        // const result = await reactPlaylist.save();
        // console.log(result);

        // ..................insert many documents in collection............. 
        const jsPlaylist = new Playlist({
            name : "JS",
            ctype : "Front End",
            videos : 40,
            active : true
        });
        const mongoPlaylist = new Playlist({
            name : "mongoDB",
            ctype : "Database",
            videos : 30,
            active : true
        });
        const mongoosePlaylist = new Playlist({
            name : "mongoose",
            ctype : "Database",
            videos : 30,
            active : true
        });

        const result = await Playlist.insertMany([jsPlaylist, mongoPlaylist, mongoosePlaylist]);
        console.log(result);
        
    } catch(err) {
        console.log(err);
    }
    
}
// createDocument();

// ..................Display all documents of collection............. 
const getDocuments = async () => {
    // syntax : Collection_name.find() 
    const result = await Playlist.find({videos : {$gte : 50}});
    console.log(result);
}
// getDocuments();

// ---------------------- update the mongodb documents using mongoose --------------------


const updateDocument = async () => {
    try {
        // updateOne() : Return object which show the count of modify documents.
    // const result = await Playlist.updateOne({
    //     _id : "65c660f7789f4c1fa94ad666"},   
    //     {$set : {
    //             name : "Javascript"
    //         }
    //     });                      

    // findByIdAndUpdate() : Return object which show the count of modify documents.
    const result = await Playlist.findByIdAndUpdate({
        _id : "65c660f7789f4c1fa94ad666"}, 
        {$set : {
                name : "Javascript"
            }
        },
        {new : true});

        console.log(result);
    } catch(err) {
        console.log(err);
    }
}
// updateDocument();

// ..................delete spacific documents in collection............. 
const deleteDocuments = async () => {
    // syntax : Collection_name.deleteOne(filter) 
    // const result = await Playlist.deleteOne({
    //     name : "mongoDB"
    // })

    // syntax : Collection_name.deleteMany(filter) 
    // const result = await Playlist.deleteMany({
    //     name : "mongoDB"
    // })

    // Above methods return count and ack of how many documents are deleted. 

    // Henced findByIdAndDelete() : Return the document which is deleted .

    const result = await Playlist.findByIdAndDelete({_id : "65c660f7789f4c1fa94ad666"})

    console.log(result);
}

deleteDocuments();