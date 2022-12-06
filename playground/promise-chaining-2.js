require("../src/db/mongoose");
const Task = require("../src/models/task");

// Task.findByIdAndDelete({ _id: "635d5f0cc29aefa9dfe268fa" })
//   .then((result) => {
//     console.log(result);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((count) => {
//     console.log(count);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const deleteAndCountTasks = async (id, isComplete) => {
  const result = await Task.findByIdAndDelete({ _id: id });
  const count = await Task.countDocuments({ completed: isComplete });

  return { result, count };
};

deleteAndCountTasks("638dcc572819b53655a5cd37", false)
  .then((result) => console.log(result))
  .catch((e) => console.log(e));
