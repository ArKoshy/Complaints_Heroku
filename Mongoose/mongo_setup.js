//mongoose setup
var mongoose = require('mongoose');
//mongoose.Promise = global.Promise;
var url = 'mongodb://ArunKoshy:abcd2018@ds143603.mlab.com:43603/complaints' ;//process.env.MONGOLAB_URI;
//create a db called Complaints and establish connection
//mongoose.connect('mongodb://localhost:27017/Complaints',{ useNewUrlParser: true }); 
//mongoose.connect('mongodb://ArunKoshy:abcd2018@ds143603.mlab.com:43603/complaints?authSource=Complaints&w=1',{ useNewUrlParser: true });
//make module exportable

// Use connect method to connect to the Server

mongoose.connect(url,
 function (err, db) {
    if (err) {
      console.log('Unable to connect to the mongoDB server. Error:', err);
    } else {
      console.log('Connection established to', url);
  
    }
  },{ useNewUrlParser: true });

module.exports={
    mongoose:mongoose  //assigned the mongoose created above to mongoose object here to return
}