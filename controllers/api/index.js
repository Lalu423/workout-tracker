const router = require('express').Router();
const workoutRoutes = require('./workoutRoutes');
const userRoutes = require('./userRoutes');
const foodRoutes = require('./foodRoutes');
const seedDbRoutes = require('./seedDbRoutes');



router.use('/workout', workoutRoutes);
router.use('/user', userRoutes);
router.use('/food', foodRoutes);
router.use('/seedDb', seedDbRoutes);


module.exports = router;