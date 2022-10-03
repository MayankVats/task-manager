const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api");

// const User = mongoose.model("User", {
//   name: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     lowercase: true,
//     validate(value) {
//       if (!validator.isEmail(value)) {
//         throw new Error("Email is invalid");
//       }
//     },
//   },
//   age: {
//     type: Number,
//     default: 0,
//     validate(value) {
//       if (value < 0) {
//         throw new Error("Age must be a positive number");
//       }
//     },
//   },
//   password: {
//     type: String,
//     required: true,
//     minLength: 6,
//     trim: true,
//     validate(value) {
//       if (value.includes("password")) {
//         throw new Error("Password cannot be password");
//       }
//     },
//   },
// });

// const me = new User({
//   name: "Jane",
//   email: "jane@Doe.CoM",
//   // age: 1,
//   password: "abc123",
// });

// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch((error) => {
//     console.log("Error", error);
//   });

const Task = mongoose.model("Task", {
  description: {
    type: String,
    trim: true,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const myTask = new Task({
  description: "Learn",
  // completed: 2,
});

myTask
  .save()
  .then(() => {
    console.log(myTask);
  })
  .catch((error) => {
    console.log(error);
  });
