var router = require('express').Router();
var mongoose = require('mongoose');
var Movie = mongoose.model('Movie');
var User = mongoose.model('User');
var auth = require('../auth');

router.get('/', auth.optional, function(req, res, next){
    Movie.find().then(function (result) {
        return res.json({
            movies: result.map(function (movie) {
                return movie.toJsonFor()
            })
        })
    }).catch(next)
});

router.post('/', auth.required, function (req, res, next) {
    User.findById(req.payload.id).then(function (user) {
        if (!user) {
            return res.sendStatus(401);
        }

        var movie = new Movie(req.body.movie);

        movie.createdBy = user;
        return movie.save().then(function () {
            return res.json({
                movie: movie.toJsonFor(user)
            });
        });
    }).catch(next);
});

module.exports = router;
