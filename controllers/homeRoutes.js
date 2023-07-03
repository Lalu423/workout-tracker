const router = require('express').Router();
const { User, Food, Workout } = require('../models');
const { workout } = require('../utils/workout-api');


router.get("/", async (req, res) => {
    try {
        const workoutData = await Workout.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });

        const workouts = workoutData.map((exercise) => exercise.get({ plain: true }));

        res.render('homepage', {
            workouts, 
            loggenin: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});



router.get('/workout-page', async (req, res) => {
    return res.render('workout');
    try{ 
        const workoutData = await workout();
    res.json(workoutData)
    res.render('workout',{
        testjson: JSON.stringify(workoutData)
    })
        res.render('workout', workoutData)
    }
    catch(err){
        console.log(err);
        res.status(400).json(err)
    }

});








// router.get()
module.exports = router