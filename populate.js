require("dotenv").config();

const JobModel = require("./models/Job");
const jobData = require("./mock_data.json");
const connectDB = require("./db/connect");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await JobModel.create(jobData);
    console.log("adicionado!");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
