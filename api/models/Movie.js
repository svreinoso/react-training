var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var User = mongoose.model('User');

var MovieSchema = new mongoose.Schema({
   title: {
       type: String,
       unique: true,
       required: true
   },
   year: Number,
   rating: Number,
   covertImage: String,
   fullImage: String,
   actors: String,
   content: [],
   createdBy: {
       type: mongoose.Schema.Types.ObjectId,
       ref: 'User'
   }
}, {timestamps: true});

MovieSchema.plugin(uniqueValidator, {
    message: 'is already taken'
});

MovieSchema.methods.toJsonFor = function () {
    return {
        id: this._id,
        title: this.title,
        year: this.year,
        rating: this.rating,
        covertImage: this.covertImage,
        fullImage: this.fullImage,
        actors: this.actors,
        content: this.content
    }
}

mongoose.model('Movie', MovieSchema);