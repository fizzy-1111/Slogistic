import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    username: {
        type: String,
        required: true,
        index: {
            unique: true
        }
    },
    password : {
        type: String,
        required: true
    },
       
})
var User = mongoose.model('User', userSchema);
export default User;