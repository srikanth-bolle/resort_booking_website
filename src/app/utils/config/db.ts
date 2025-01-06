import mongoose from "mongoose";

const DbConnection = async () => {
    try {
        if (process.env.Mongo_Url) {
            await mongoose.connect(process.env.Mongo_Url, {
                serverSelectionTimeoutMS: 10000, // Timeout for server selection
            });
            console.log("MongoDB connected successfully");
        } else {
            console.error("Mongo_Url is not defined in the environment variables.");
            throw new Error("Missing Mongo_Url environment variable");
        }
    } catch (error: any) {
        console.error("MongoDB connection failed:", error.message);
        throw error; // Rethrow the error for upstream handling
    }
};

export default DbConnection;
