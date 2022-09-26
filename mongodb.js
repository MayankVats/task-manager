// CRUD - create read update delete
const { ObjectId, MongoClient } = require("mongodb");
const mongoClient = MongoClient;

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

const id = new ObjectId();
console.log(id);
console.log(id.getTimestamp());

mongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database.");
    }

    const db = client.db(databaseName);

    // const updatePromise = db
    //   .collection("users")
    //   .updateOne(
    //     { _id: new ObjectId("632d84f5c040ca5d2e7439aa") },
    //     { $set: { name: "John" }, $inc: { age: 10 } }
    //   );

    // updatePromise
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // const updateManyPromise = db
    //   .collection("tasks")
    //   .updateMany({ completed: true }, { $set: { completed: false } });

    // updateManyPromise
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    const deletePromise = db
      .collection("tasks")
      .deleteOne({ description: "Dance in the rain." });

    deletePromise
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
);

{
  // db.collection("tasks").findOne(
  //   { _id: new ObjectId("632d87ca53dec193d35ed0ec") },
  //   (error, result) => {
  //     if (error) {
  //       return console.log(error);
  //     }
  //     console.log(result);
  //   }
  // );
  // db.collection("tasks")
  //   .find({ completed: false })
  //   .toArray((error, result) => {
  //     if (error) {
  //       return console.log(error);
  //     }
  //     console.log(result);
  //   });
  // db.collection("users")
  // .find({ age: 27 })
  // .toArray((error, result) => {
  //   if (error) {
  //     return console.log("Unable to fetch");
  //   }
  //   console.log(result);
  // });
  // db.collection("users").findOne(
  //   { _id: new ObjectId("632d94899a365be67f79aa94") },
  //   (error, result) => {
  //     if (error) {
  //       return console.log("Unable to fetch");
  //     }
  //     console.log(result);
  //   }
  // );
  // db.collection("users").findOne(
  //   { name: "Vicky", age: 1 },
  //   (error, result) => {
  //     if (error) {
  //       return console.log("Unable to fetch");
  //     }
  //     console.log(result);
  //   }
  // );
  // db.collection("users").insertOne(
  //   {
  //     _id: id,
  //     name: "Vicky",
  //     age: 23,
  //   },
  //   (error, result) => {
  //     if (error) {
  //       return console.log("Unable to insert user");
  //     }
  //     console.log(result);
  //   }
  // );
  // db.collection("users").insertOne(
  //   {
  //     name: "Mayank",
  //     age: 23,
  //   },
  //   (error, result) => {
  //     if (error) {
  //       return console.log("Unable to insert user");
  //     }
  //     console.log(result);
  //   }
  // );
  // db.collection("users").insertMany(
  //   [
  //     {
  //       name: "Jack",
  //       age: 23,
  //     },
  //     {
  //       name: "Daniels",
  //       age: 25,
  //     },
  //     {
  //       name: "Sparrow",
  //       age: 27,
  //     },
  //   ],
  //   (error, result) => {
  //     if (error) {
  //       return console.log("Unable to insert user");
  //     }
  //     console.log(result);
  //   }
  // );
  // db.collection("tasks").insertMany([
  //   {
  //     description: "Dance in the rain.",
  //     completed: true,
  //   },
  //   {
  //     description: "Take a selfie.",
  //     completed: false,
  //   },
  //   {
  //     description: "Sing a song.",
  //     completed: true,
  //   },
  // ]);
}

/**
 * insertOne
 * insertMany
 *
 * find (returns cursor)
 * findOne
 *
 * updateOne
 * updateMany
 *
 * deleteOne
 * deleteMany
 */
