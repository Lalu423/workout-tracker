const router = require('express').Router();
const { workout } = require('../utils/workout-api');


router.get('/workout-page', async (req, res) => {
    try{ 
        const workoutData = await workout();
        //res.json(workoutData)
        // res.render('workout',{
        //     testjson: JSON.stringify(workoutData)
        // })
        res.render('workout', workoutData)
    }
    catch(err){
        console.log(err);
        res.status(400).json(err)
    }

})





module.exports = router