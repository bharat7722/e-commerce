const mongoose = require("mongoose");
const db = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MONGO CONNECTED");
  } catch (error) {
    console.log(`Serve is not connected to DB ${error}`);
  }
};
module.exports = db;
