const { workout } = require('../../utils/workout-api');
const router = require('express').Router();
const { Workout }= require('../../models');

// create workout
// POST /api/workoutRoute

router.post("/", async (req, res) => {
    Workout.create({
        name: req.body.name,
        description: req.body.description
    })
});


router.get("/", async (req, res) => {
    try{ 
        const workoutData = await workout();
        res.json(workoutData)
    }
    catch(err){
        console.log(err);
        res.status(400).json(err)
    }
})






module.exports = router;