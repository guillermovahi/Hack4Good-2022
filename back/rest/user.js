const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

//conexión con la base de datos
const {connection} = require("./db/config.db");

const getUser = (request, response) => {
    const {id} = request.body;
    connection.query("SELECT * FROM user_files(user_id) WHERE id = (?)", 
    (error, results) => {
        if(error)
            throw error;
        response.status(200).json(results);
    });
};
//ruta
app.route("/user")
.get(getUser);


const postUser = (request, response) => {
    const {user_id, user_name, path} = request.body;
    connection.query("INSERT INTO user_files(user_id, user_name, path) VALUES (?,?,?) ", 
    [user_id, user_name, path],
    (error, results) => {
        if(error)
            throw error;
        response.status(201).json({"User añadido correctamente": results.affectedRows});
    });
};
//ruta
app.route("/user")
.post(postUser);


module.exports = app;