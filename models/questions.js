const mongoose =require('mongoose');

const questionScheema=  new mongoose.Schema({
    title:{
        type:String,
        require:true,
    },

    options:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Option'
        }
    ]
})

const Question= mongoose.model('Question',questionScheema);
module.exports=Question;
