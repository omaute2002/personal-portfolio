import mongoose from 'mongoose'
const {Schema} =  mongoose;


const experienceSchema = new Schema({
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

const Experience = mongoose.model("Experience", experienceSchema);
export default Experience;

