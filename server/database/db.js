import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
 const Connection = () =>{
     const MONGODB_URL = `mongodb://${USERNAME}:${PASSWORD}@ac-rip6zb3-shard-00-00.b3pvjte.mongodb.net:27017,ac-rip6zb3-shard-00-01.b3pvjte.mongodb.net:27017,ac-rip6zb3-shard-00-02.b3pvjte.mongodb.net:27017/?ssl=true&replicaSet=atlas-v5hr1z-shard-0&authSource=admin&retryWrites=true&w=majority`;
    mongoose.connect(MONGODB_URL,{useNewUrlParser: true});

    mongoose.connection.on('connected', ()=>{
        console.log('Database connected succesfully');
    })

    mongoose.connection.on('disconnected', ()=>{
        console.log('Database disconnected');
    })
    mongoose.connection.on('error', ()=>{
        console.log('Error while connecting with the database',error.message);
    })
}

export default Connection;