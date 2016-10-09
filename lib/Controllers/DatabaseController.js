'use strict';
const mongoose = require('mongoose');
const debug = require('debug')('localizify-server:server');
class DatabaseController {
  
  constructor() {
    this.connection = mongoose.connection;
    this.host = "127.0.0.1";
    this.port = 27017;
    this.databaseName = "localizify";
  }

  connectionString() {
    var host =  "mongodb://" + this.host;
    if (this.port != undefined &&
        this.port > 0) {
      host = host + ":" + this.port;
    }
    host += "/" + this.databaseName;
    return host;
  }

  connect() {
    mongoose.connect(this.connectionString());
    this.connection.on('error', console.error.bind(console, 'connection error:'));
    this.connection.once('open', function() {
      console.log('Database connected');
    });
  }

}

module.exports = new DatabaseController();