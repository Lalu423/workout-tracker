const router = require('express').Router();
const { User, Food, Workout } = require('../models');
const withAuth = require('../utils/auth');
const { workout } = require('../utils/workout-api');



router.get("/", async (req, res) => {
    try {
        console.log("req.session", req.session);
        const workoutData = await Workout.findAll({
            // include: [
            //     {
            //         model: User,
            //         attributes: ['name'],
            //     },
            // ],
        });

         const workouts = workoutData.map((exercise) => exercise.get({ plain: true }));

        res.render('homepage', {
         workouts, 
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    // if (req.session.logged_in) {
    //     res.redirect('/profile');
    //     return;
    // }
console.log(req.session);
    res.render('login');
});

router.get('/profile', async (req, res) => {
    console.log(req.session);
    const workoutData = await Workout.findAll({
    where:{user_id:req.session.user_id}
    });

     const workout = workoutData.map((exercise) => exercise.get({ plain: true }));
    res.render('profile', {workout, username:req.session.username,             logged_in: req.session.logged_in
    });


});


router.get('/workout-page', async (req, res) => {
  try {
    const workoutData = await workout();
    res.render('workout', { workoutData, logged_in: req.session.logged_in});
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Failed to fetch workout data' });
  }
});








//router.get()
module.exports = router