import mongoose from "mongoose";

const dbConn = async () => {
    try {
        mongoose.connect(`mongodb://127.0.0.1:27017/Forms`)
        console.log("Database Connected")
    } catch (error) {
        console.log("Database ERROR")
    }
};

export default dbConn;
