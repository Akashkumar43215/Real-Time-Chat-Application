// import mongoose from "mongoose";

// const connectDb =async ()=>{
//     try {
//         await mongoose.connect(process.env.MONGODB_URL)
//         console.log("db connected")
//     } catch (error) {
//         console.log("db error")
//     }
// }

// export default connectDb




import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL);
    console.log("✅ MongoDB Connected");
    console.log(conn.connection.host);
  } catch (error) {
    console.error("❌ MongoDB Connection Error:");
    console.error(error);
    process.exit(1);
  }
};

export default connectDb;