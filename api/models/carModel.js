var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = mongoose.model('User');

var carSchema = new Schema({
	'door' : String,
	'color' : String,
	'year' : Number,
	'owner' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'User'
	}
});

module.exports = mongoose.model('car', carSchema);
