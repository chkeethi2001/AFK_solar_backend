import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const MONGO_URI = "mongodb+srv://chkeethi2001_db_user:Keerthi123@cluster0.axyk08m.mongodb.net/";
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error("MongoDB Connection Failed:", error);
    process.exit(1);
  }
};

export default connectDB;
