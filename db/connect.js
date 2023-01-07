
import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

import { MongoClient } from 'mongodb';

MongoClient.connect("mongodb://taskmanagermongodb:pS4YkdzPLiDEcMpEy6Fu5WiI639aHWcMJkuNcDh0OCKjdazcwHDCjg9kIDZZ8Q0qproq9bGNZfoBACDbTPxi4g%3D%3D@taskmanagermongodb.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@taskmanagermongodb@", function (err, client) {
  client.close();
});



mongoose.set('strictQuery', false);
const connectDB = (url) => {
    return mongoose.connect(url);
}

export default connectDB;