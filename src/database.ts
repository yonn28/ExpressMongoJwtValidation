import mongoose  from "mongoose";
import config from "./config/config";



mongoose.connect(config.DB.URI,{useNewUrlParser: true,useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('mongo conection stablished');
});

connection.on('error', (e) => {
    console.log('error on db conection', e);
})