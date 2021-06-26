const Duck = require('../models/Duck');

exports.getIndex = async (req, res) => {
    const duck = await Duck.find((data) => data);

    try {
        console.log(duck);
        // Data rendered as an object and passed down into index.ejs       
        //res.status(200).render('index', { duck: duck });
    
        // Data returned as json so a fetch/axios request can get it
        res.json(duck);

    } catch (error) {
        console.log(error);
    }
};

exports.getDuck = async (req, res) => {
    const duckId = req.params.duckId;

    const duck = await Duck.findById(duckId, (duck) => duck);

    try {
        console.log(duck);
        res.status(200).render('duck', { duck: duck });
    } catch (error) {
        console.log(error);
    }
};

exports.getAddDuck = (req, res) => {
    res.status(200).render('edit-duck', { editing: false });
};

exports.getEditDuck = async (req, res) => {
    const duckId = req.params.duckId;

    const editMode = req.query.edit;

    if (!editMode) {
        return res.redirect('/');
    }

    const duck = await Duck.findById(duckId);

    try {
        if (!duckId) {
            return res.redirect('/');
        }
        console.log(duck);
        res.status(200).render('edit-duck', { duck: duck, editing: editMode });
    } catch (error) {
        console.log(error);
    }
};

exports.postDuck = (req, res) => {
    const { user, problem, goal, steps } = req.body;
    const duck = new Duck({ user: user, problem: problem, goal: goal, steps: steps });
    duck.save();
    console.log('Duck Added to the database');

    // Updated the home route to the React App index page
    res.status(201).redirect('http://localhost:3000/');
};

exports.postEditDuck = (req, res) => {
    const duckId = req.body.duckId;
    const { user, problem, goal, steps } = req.body;

    Duck.findById(duckId)
        .then((duck) => {
            duck.user = user;
            duck.problem = problem;
            duck.goal = goal;
            duck.steps = steps;

            return duck.save();
        })
        .then(() => {
            console.log('Item Updated');
            res.status(201).redirect('/');
        })
        .catch((err) => {
            console.log(err);
        });
};

exports.postDelete = async (req, res) => {
    const duckId = req.body.duckId;
    const duck = await Duck.findByIdAndRemove(duckId, (data) => data);

    try {
        console.log(duck);
        console.log('Item Deleted');
        res.redirect('/');
    } catch (error) {
        console.log(error);
    }
};