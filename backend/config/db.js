import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://royargha2002:riju10@cluster0.pxjtezp.mongodb.net/food-deli').then(()=>console.log("DB Connected"));

}