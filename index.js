"use strict";
const PORT = 4200;

//http server
const express = require('express');
const app = express();
const http = require('http').Server(app);
const server = require("./server");
app.use(express.static(__dirname + '/client'));

server.start(app, http, PORT);