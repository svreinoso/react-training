var router = require('express').Router();
var mongoose = require('mongoose');
var Movie = mongoose.model('Movie');
var User = mongoose.model('User');
var auth = require('../auth');

router.get('/', auth.optional, function(req, res, next){
    var query = {};
    var pageZise = 20;
    var limit = 20;
    var offset = 0;

    if(typeof req.query.page !== 'undefined'){
        if(req.query.page > 1 ){
            offset = req.query.page * pageZise;
        }
    }

    if(typeof req.query.limit !== 'undefined'){
        limit = req.query.limit;
    }

    if(typeof req.query.offset !== 'undefined'){
        offset = req.query.offset;
    }

    if (req.query.actor){
        query.actors = {"$regex": req.query.actor}
    }

    if (req.query.title){
        query.title = {"$regex": req.query.title}
    }

    if (req.query.year){
        query.year = req.query.year
    }

    console.log(offset);

    return Promise.all([
        Movie.find(query)
            .limit(Number(limit))
            .skip(Number(offset))
            .exec(),
        Movie.count(query).exec()
    ]).then(function(result){
        console.log(result);
        var movies = result[0];
        var moviesCount = result[1];
        var pages = moviesCount / pageZise;
        return res.json({
            movies: movies.map(function(movie){
                return movie.toJsonFor();
            }),
            moviesCount: moviesCount,
            pages: Math.ceil(pages)
        });
    }).catch(next);
});

router.get('/:id', auth.optional, function (req, res, next) {
    Movie.findById(req.params.id, function (err, movie) {
        console.log(err, movie);
        if (err) return next(err);
        res.send(movie.toJsonFor());
    })
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
