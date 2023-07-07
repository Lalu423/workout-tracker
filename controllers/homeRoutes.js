const router = require('express').Router();
const { User, Workout } = require('../models');
const withAuth = require('../utils/auth');
const { workout } = require('../utils/workout-api');



router.get("/", async (req, res) => {
    try {
        console.log("req.session", req.session);
        const workoutData = await Workout.findAll({
            // include: [
            //     {
            //         model: User,
            //         attributes: ['username'],
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
    if (req.session.logged_in) {
        res.redirect('/profile');
        return;
    }
    console.log(req.session);
    res.render('login');
});

router.get('/profile', withAuth, async (req, res) => {

    console.log("session id", req.session.user_id)

    try {
        // Find the logged in user based on the session ID
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Workout }],
        });



        const user = userData.get({ plain: true });
        console.log("userData", user)
        res.render('profile', {
            ...user,
            logged_in: true
        });
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
});

router.post('/create-workout', (req,res) => {
    
})

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
        res.redirect('/profile');
        return;
    }

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


    try {
        // Find the logged in user based on the session ID
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Workout }],
        });



        const user = userData.get({ plain: true });

        console.log(user)
        const workoutData = await workout();
        res.render('workout', {
            ...user,
            logged_in: true,
            workoutData

        });


    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }






});








//router.get()
module.exports = router