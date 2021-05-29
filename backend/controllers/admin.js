const Duck = require('../models/Duck');

exports.getIndex = (req, res) => {
    res.status(200).render('index');
};

exports.getAddDuck = (req, res) => {
    res.status(200).render('edit-duck');
};

exports.postDuck = (req, res) => {
    const { user, problem, goal, steps } = req.body;

    const duck = new Duck({ user: user, problem: problem, goal: goal, steps: steps  });
    duck.save();
    console.log('Duck Added to the database');
    res.status(201).redirect('/');
};
