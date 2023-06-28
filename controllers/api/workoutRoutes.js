const { workout } = require('../../utils/workout-api');

const router = require('express').Router();


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