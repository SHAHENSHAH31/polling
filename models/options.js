const mongoose=require('mongoose');

const optionScheema= new mongoose.Schema({
    option:{
        type:String,
        require:true,
    },
    question:{
        type: mongoose.Schema.Types.ObjectId,
        require:true,
    },
    vote:{
        type:Number,
        default:0
    },
    add_vote:{
        type: String
    }
})

const Option=mongoose.model('Option',optionScheema);
module.exports=Option;