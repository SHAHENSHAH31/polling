const mongoose=require('mongoose');
mongoose.set('strictQuery',false);
mongoose.connect('mongodb+srv://tyagichanchal407:Shahenshah@cluster0.vmyxmud.mongodb.net/polling?retryWrites=true&w=majority')
.then(
() => {console.log("Database connected successfully")},
(err) => {console.log("error occuring while database connecting",err)}
);

module.exports = mongoose;
