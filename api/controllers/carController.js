var carModel = require('../models/carModel.js');
var mongoose = require('mongoose');
var User = mongoose.model('User');
/**
 * carController.js
 *
 * @description :: Server-side logic for managing cars.
 */
module.exports = {

    /**
     * carController.list()
     */
    list: function (req, res) {
        carModel.find(function (err, cars) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting car.',
                    error: err
                });
            }
            return res.json(cars);
        });
    },

    /**
     * carController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        carModel.findOne({_id: id}, function (err, car) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting car.',
                    error: err
                });
            }
            if (!car) {
                return res.status(404).json({
                    message: 'No such car'
                });
            }
            return res.json(car);
        });
    },

    /**
     * carController.create()
     */
    create: function (req, res, next) {
        var car = new carModel({
			door : req.body.door,
			color : req.body.color,
			year : req.body.year,
			owner : req.body.owner

        });

        User.findById(req.payload.id).then(function (user) {
            if (!user) {
                return res.sendStatus(401);
            }

            // var article = new Article(req.body.article);

            car.owner = user;
            // return car.save().then(function () {
            //     return res.json({
            //         car: article.toJSONFor(user)
            //     });
            // });

                    car.save(function (err, car) {
                        if (err) {
                            return res.status(500).json({
                                message: 'Error when creating car',
                                error: err
                            });
                        }
                        return res.status(201).json(car);
                    });
        }).catch(next);

    },

    /**
     * carController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        carModel.findOne({_id: id}, function (err, car) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting car',
                    error: err
                });
            }
            if (!car) {
                return res.status(404).json({
                    message: 'No such car'
                });
            }

            car.door = req.body.door ? req.body.door : car.door;
			car.color = req.body.color ? req.body.color : car.color;
			car.year = req.body.year ? req.body.year : car.year;
			car.owner = req.body.owner ? req.body.owner : car.owner;
			
            car.save(function (err, car) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating car.',
                        error: err
                    });
                }

                return res.json(car);
            });
        });
    },

    /**
     * carController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        carModel.findByIdAndRemove(id, function (err, car) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the car.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
