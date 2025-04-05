const express = require("express");
const userRouter = require("./routes/users");

const createApp = () => {
  const app = express();
  app.use(express.json());
  app.use(userRouter);
  return app;
};

module.exports = createApp;
