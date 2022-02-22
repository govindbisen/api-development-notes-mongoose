const express = require("express");
const myReqLogger = require("./Utilities/requestLogger");
const route = require("./Routes/routing");

const app = express();
app.use(express.json());
app.use(myReqLogger);

app.use("/", route);

app.get("/", (req, res) => {
  res.send("Govind is running");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`app is listening at localhost://${port}`);
});
