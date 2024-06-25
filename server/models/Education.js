import mongoose from 'mongoose'
const {Schema} =  mongoose;


const educationSchema = new Schema({
    subHeading: {
        type:String,
        required: true,
    
    },
    heading: {
        type:String,
        required: true,
    },
    description:{
        type:String,
        required:true,
    }

})

const Education = mongoose.model("Education", educationSchema);
export default Education;

