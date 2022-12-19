const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const PORT = process.env.PORT || 3000;

// app.use((req, res, next) => {
//   res.status(503).send("Site is under maintainance");
//   next();
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
});

// const Task = require("./models/task");

// const main = async () => {
//   const task = await Task.findById("639ad1dd6df7f56512d1edb0");
//   await task.populate("author");
//   console.log(task.author);
// };

// main();
