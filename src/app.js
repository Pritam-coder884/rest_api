const express = require("express");
require("./db/connect");
const studentRouter=require("./routers/student");
const app = express();
const port = process.env.PORT || 8000;
app.use(express.json());

app.use(studentRouter);

app.listen(port, () => {
  console.log(`connection is set up at ${port}`);
});
