require("../src/db/mongoose");
const User = require("../src/models/user");

// 6332d9bb3b0f4de2ec614eb3

// User.findByIdAndUpdate("63480908ffeb6087c7560d76", { age: 1 })
//   .then((user) => {
//     console.log(user);

//     return User.countDocuments({ age: 1 });
//   })
//   .then((count) => console.log(count))
//   .catch((error) => console.log(error));

const updateAgeandCount = async () => {
  const user = await User.findByIdAndUpdate("6332d9bb3b0f4de2ec614eb3", {
    age: 1,
  });
  const count = await User.countDocuments({ age: 1 });

  return { user, count };
};

updateAgeandCount()
  .then((result) => console.log("result", result))
  .catch((e) => console.log("e", e));
