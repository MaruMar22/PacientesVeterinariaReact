import momgoose from 'mongoose'

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost/veterinaria');
        console.log(">>> DB is connected")
    }   catch (error) {
        console.log(error);
    }
};