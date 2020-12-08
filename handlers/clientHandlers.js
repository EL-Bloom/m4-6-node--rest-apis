const e = require("express");
const { v4: uuidv4 } = require("uuid");
const { clients } = require("../data/clients");

let AllClients = (req, res) => {
  return res.json({ status: 200, clients });
};

let ClientInfo = (req, res) => {
  let id = req.params.id;
  let information = clients.find((client) => {
    return client.id == id;
  });
  return res.json({ status: 200, information });
};

let CreateNewClient = (req, res) => {
  let newClient = req.body;

  let existingEmail = clients.some((client) => {
    return client.email == newClient.email;
  });
  if (existingEmail) {
    return res.status(400).json("User already existing");
  } else {
    newClient.id = uuidv4();
    console.log(newClient);
    clients.push(req.body);
    return res
      .status(201)
      .json({ status: 201, message: "Thank you for joining!" });
  }
};

let DeleteClient = (req, res) => {
  const { id } = req.params;
  const client = clients.find((client) => client.id === id);
  if (!client) {
    res.status(400).json({
      status: 400,
      message: "Client not found",
    });
  } else {
    res.status(200).json({
      status: 200,
      message: `${client.name} has been deleted successfully.`,
    });
  }
};

module.exports = { AllClients, ClientInfo, CreateNewClient, DeleteClient };
