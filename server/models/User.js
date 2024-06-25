import mongoose from 'mongoose'
const {Schema} = mongoose

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        minlength: 6,
    }
})

const User = mongoose.model("User", userSchema);
export default User;