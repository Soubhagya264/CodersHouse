const mongoose = require('mongoose');
const Schema= mongoose.Schema;
const refreshSchema = new Schema({
    token: { type: String, required: true},
    userId:{
        type:Schema.Types.ObjectID,ref:"User"
    },
    
},
);
module.exports=mongoose.model('Refresh',refreshSchema,'tokens')