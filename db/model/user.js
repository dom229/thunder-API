import mongoose from 'mongoose';
const User = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    
});