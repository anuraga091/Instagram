import mongoose from "mongoose";

export const Connection= async (username, password) => {

const URL = `mongodb://${username}:${password}@instagram-shard-00-00.b2pe6.mongodb.net:27017,instagram-shard-00-01.b2pe6.mongodb.net:27017,instagram-shard-00-02.b2pe6.mongodb.net:27017/INSTAGRAM?ssl=true&replicaSet=atlas-qf8u5h-shard-0&authSource=admin&retryWrites=true&w=majority`
    
  try{
    await  mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true});
    console.log(`Database Connected Successfully`)
  } catch(error){
    console.log(`Error while connecting the database`, error.message);
  }
}

export default Connection;