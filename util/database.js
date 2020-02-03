const mongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://MongoServer:12345@mongodb-n4mfl.mongodb.net/shop?retryWrites=true&w=majority"
let _db;

const mongoConnect = callback=>{
    mongoClient.connect(uri, {useNewUrlParser: true}).then(client => {
        console.log('connected');
        _db = client.db();
        callback();
    }).catch(err =>{
        console.log(err);
        throw err;
    });
};

const getDB = () =>{
    if(_db){
        return _db;
    }
    throw 'no database found !'
}




exports.mongoConnect = mongoConnect;
exports.getDB = getDB;