import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://dependragitcreator:7505526994@cluster0.gsuci1x.mongodb.net/food-del")
    .then(() => console.log("Database connected"));
}