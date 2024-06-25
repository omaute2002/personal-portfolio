import mongoose from 'mongoose'
const {Schema} =  mongoose;


const skillsSchema = new Schema({
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

const Skill = mongoose.model("Skill", skillsSchema);
export default Skill;

