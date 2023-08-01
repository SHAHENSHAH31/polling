const express= require('express');
const Router= express.Router();
const question_controller= require('../../../controller/QuestionsController');

Router.post('/create',question_controller.create);
Router.get('/view/:id',question_controller.showDetails);
Router.delete('/delete/:id',question_controller.delete);
console.log('hi');
Router.use('/options',require('./options'))
  
module.exports=Router;