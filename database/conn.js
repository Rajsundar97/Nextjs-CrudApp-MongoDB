import mongoose from 'mongoose';

const MONGOSE_URI = "mongodb+srv://rajsundar:uafx9WvgazFaV1lE@cluster0.antnjvf.mongodb.net/employee?retryWrites=true&w=majority"

const connectMongo = async () => {
    try{

        const { connection }  = await mongoose.connect(MONGOSE_URI)

        if(connection.readyState == 1){
            console.log("Database Connected")
        }

    }catch(errors){
        return Promise.reject(errors)
    }
}

export default connectMongo;