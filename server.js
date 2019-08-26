// // Import express
// const express = require("express");

// // Import Body parser
// const bodyParser = require("body-parser");

// // Import Mongoose
// const mongoose = require("mongoose");

// // Initialize Express app
// const app = express();

// // Import CORS
// const cors = require("cors");

// // Import jwt
// const jwt = require("jsonwebtoken");

// // Import routes
// const apiRoutes = require("./app/routes/Router");

// // Configure bodyparser to handle post requests
// app.use(
//   bodyParser.urlencoded({
//     extended: true
//   })
// );
// app.use(bodyParser.json());

// // Initialize CORS
// app.use(cors());

// // Connect to Mongoose and set connection variable
// mongoose.connect("mongodb://localhost/global-api3", {
//   useNewUrlParser: true,
//   useCreateIndex: true
// });

// const db = mongoose.connection;

// // Connection check
// if (!db) console.log("Issues with database connection");
// else console.log("Database connected successfully");

// // Set server port
// const port = process.env.PORT || 8183;

// // Send message for default URL
// app.get("/", (req, res) =>
//   res.send(
//     'Server was running right <br> <a href="https://portal-ua.globallogic.com/gitlab/oleksandr.babin/global-social-api">Documentation</a> '
//   )
// );

// // Use Api routes in the App
// app.use("/api", apiRoutes);
// // Run app to listen to specified port
// app.listen(port, function() {
//   console.log("Server live at " + "http://localhost:" + port + " ❤");
// });

class Server {
  constructor(
    express,
    bodyParser,
    mongoose,
    cors,
    jwt,
    apiRoutes,
    dbRoute,
    port
  ) {
    this.express = require(express);
    this.bodyParser = require(bodyParser);
    this.mongoose = require(mongoose);
    this.app = this.express();
    this.cors = require(cors);
    this.jwt = require(jwt);
    this.apiRoutes = require(apiRoutes);
    this.dbRoute = dbRoute;
    this.port = process.env.PORT || port;
    this.establishBodyParser();
    this.establishCors();
    this.establishMongooseDbConnection();
    this.db();
    this.sendRunMessage();
    this.useApiRoutes();
    this.listenPort();
  }

  establishBodyParser() {
    this.app.use(this.bodyParser.json());
  }
  establishCors() {
    this.app.use(this.cors());
  }
  establishMongooseDbConnection() {
    this.mongoose.connect(this.dbRoute, {
      useNewUrlParser: true,
      useCreateIndex: true
    });
  }
  db() {
    const dbConnerctions = this.mongoose.connection;
    if (!dbConnerctions) {
      console.log("Issues with database connection");
      return;
    }
    console.log("Database connected successfully");
  }
  sendRunMessage() {
    this.app.get("/", (req, res) => res.send("Server was running right"));
  }
  useApiRoutes() {
    this.app.use("/api", this.apiRoutes);
  }
  listenPort() {
    this.app.listen(this.port, () => {
      console.log("Server live at " + "http://localhost:" + this.port + " ❤");
    });
  }
}

const server = new Server(
  "express",
  "body-parser",
  "mongoose",
  "cors",
  "jsonwebtoken",
  "./app/routes/Router",
  "mongodb://localhost/global-api3",
  8183
);
