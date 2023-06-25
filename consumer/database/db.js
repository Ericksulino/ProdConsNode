const mongoose = require('mongoose');

const connectDatabase = () => {
    console.log("Tentando conectar ao Banco");

    mongoose.set("strictQuery", false);
    mongoose.connect('mongodb://root:example@mongo:27017', { useNewUrlParser: true, useUnifiedTopology: true }
    ).then(() => console.log("MongoDB Atlas Conectado!")).catch((error) => console.log(error));
};

module.exports = connectDatabase;
