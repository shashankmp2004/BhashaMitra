const mongoose = require("mongoose");
require("dotenv").config();
const uri = process.env.MONGO_URL;

async function db() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB with Mongoose");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

module.exports = { db };
