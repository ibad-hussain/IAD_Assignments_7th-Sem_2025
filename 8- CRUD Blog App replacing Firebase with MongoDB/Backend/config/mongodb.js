import mongoose from "mongoose";

const connectDB = async () => {

    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/blog-app');

        console.log("Database connected successfully");

        mongoose.connection.on('disconnected', () => {
            console.warn("⚠️ MongoDB disconnected");
        });

        mongoose.connection.on('error', (error) => {
            console.error("❌ MongoDB error :", error);
        });

    } catch (error) {
        console.error("❌ Database connection failed :", error);
        process.exit(1);
    }

}

export default connectDB;
