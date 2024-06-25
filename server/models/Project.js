import mongoose from 'mongoose'
const {Schema} =  mongoose;


const projectSchema = new Schema({
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

const Project = mongoose.model("Project", projectSchema);
export default Project;

