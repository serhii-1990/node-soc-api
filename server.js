class Server {
  constructor(apiRoutes, dbRoute, port) {
    this.express = require("express");
    this.bodyParser = require("body-parser");
    this.mongoose = require("mongoose");
    this.app = this.express();
    this.cors = require("cors");
    this.jwt = require("jsonwebtoken");
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
  "./app/routes/Router",
  "mongodb://localhost/global-api3",
  8183
);
