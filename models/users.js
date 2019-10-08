const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
        id:{
            type:Schema.Types.ObjectId
        },
        yc:[
            {
                
            }
        ],
        ec:{
            type:Number
        }
        
})

const User = mongoose.model('users', userSchema);
module.exports = User