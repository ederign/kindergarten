// Require mongoose
var mongoose = require('mongoose');

// Configure conenction URL (only needs to happen once per app)
//CREATE USER
mongoose.connect('mongodb://admin:teste@ds060968.mongolab.com:60968/dorinha');

// Create a database schema for our Post object, which will describe both it's
// data and it's behavior.
var postSchema = mongoose.Schema({
    title:String,
    content:String
});

// Create a model object constructor that will have ODM functionality like .save()...
var Post = mongoose.model('Post', postSchema);

// Expose out model as the module interface
module.exports = Post;