var mongoose = require('mongoose');

var userSchema =mongoose.Schema({
	username:{
		type:String
	},
	email:{
		type:String
	},
	password:{
		type:String
	},
	type:
	{
		type:String
	}
});

var User =module.exports =mongoose.model('user',userSchema);

module.exports.getUserByid=function(id,callback){
	User.findByid(id,callback);
}

module.exports.getUserByUsername=function(username,callback){
	var query={username:username};
	Class.findOne(query,callback);
}

router.post('/login',passport.authenticate('local',{failureRedirect:'/',failureFlash:'Wrong Username or Password'}),function(req,res){
	req.flash('sucess','you are now logged in');
	res.redirect('/');

});