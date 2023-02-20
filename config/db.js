const mongoose = require("mongoose");

const connectDB = async () => {
  mongoose.set("strictQuery", true);
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB connected at:  ${conn.connection.host} `);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
