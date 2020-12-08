"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const {
  AllClients,
  ClientInfo,
  CreateNewClient,
  DeleteClient,
} = require("./handlers/clientHandlers");

const {
  WordCount,
  WordId,
  HandlerStatus,
} = require("./handlers/hangmanHandlers");

express()
  .use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  .use(morgan("tiny"))
  .use(express.static("public"))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))

  // For informations about all the clients
  .get("/clients", AllClients)
  // For information about an existing client
  .get("/clients/:id", ClientInfo)
  //To create a new client
  .post("/newclient", CreateNewClient)
  // To delete an existing client
  .delete("/clients/:id", DeleteClient)


  // Returns the word object of the id
  .get("/hangman/word/:id", WordId)
// Returns the id and the lettercount of a random word object
  .get("/hangman/word", WordCount)
//Return the appropriate status code
  .get("/hangman/guess/:id/:letter", HandlerStatus)

  .listen(8000, () => console.log(`Listening on port 8000`));
