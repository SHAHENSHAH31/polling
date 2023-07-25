const Question= require('../models/questions');
const Option= require('../models/options');

module.exports.create= async function(req,res){

  console.log(req.url);
  console.log(req.body);
    
    const ques=await Question.create(req.body)
        try{
          res.send(ques);
        }
        catch(err){
          console.log(err);
        }

}

module.exports.showDetails= async function(req,res){

      const ques=await Question.findById(req.params.id).populate('options');

      if(ques){
        res.send(ques);
      }
      else{
        res.send('id does not exist');
      }

}

module.exports.delete=async function(req,res){

   const ques= await Question.deleteOne(req.params.id);
   if(ques){
    
        await Question.deleteOne(req.params.id)

          await Option.deleteMany({question:req.param.id});
          res.send("ques deleted");
   }

   else{
    res.send('question does not exist');
   }
}