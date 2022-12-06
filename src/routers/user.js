const express = require("express");
const User = require("../models/user");
const router = new express.Router();

router.get("/test", (req, res) => {
  res.send("This is from User route.");
});

router.post("/users", async (req, res) => {
  const user = new User(req.body);

  // user
  //   .save()
  //   .then(() => {
  //     res.status(201).send(user);
  //   })
  //   .catch((error) => {
  //     res.status(400);
  //     res.send({ error });
  //   });

  try {
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send({ error });
  }
});

router.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    res.status(500).send();
  }

  // User.find({})
  //   .then((result) => {
  //     console.log(result);
  //     res.send(result);
  //   })
  //   .catch((error) => {
  //     res.status(500);
  //     res.send();
  //   });
});

router.get("/users/:id", (req, res) => {
  const _id = req.params.id;

  try {
    const user = User.findById(_id);
    if (user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }

  // User.findById(_id)
  //   .then((user) => {
  //     if (user) {
  //       return res.send(user);
  //     }
  //     res.status(404).send();
  //   })
  //   .catch((e) => {
  //     res.status(500).send({ error: e.message });
  //   });
});

router.patch("/users/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "email", "password", "age"];
  const isValidOperation = updates.every((update) => {
    return allowedUpdates.includes(update);
  });

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid Update" });
  }

  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!user) {
      return res.status(404).send();
    }

    res.send(user);
  } catch (error) {
    res.status(400).send({ error });
  }
});

router.delete("/users/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).send();
    }

    res.send(user);
  } catch (error) {
    res.status(500).send();
  }
});

module.exports = router;
