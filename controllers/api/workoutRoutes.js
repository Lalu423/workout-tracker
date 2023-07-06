const { workout } = require('../../utils/workout-api');
const router = require('express').Router();
const { Workout } = require('../../models');

// create workout
// POST /api/workoutRoute

router.post("/", async (req, res) => {
    Workout.create({
        name: req.body.name,
        description: req.body.description
    })
});


router.get('/', async (req, res) => {
    try {
        const response = await workout();
        const data = await response.json();

        const filteredData = data.map(item => ({
            name: item.name,
            description: item.description,
        }));

        res.json(filteredData);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Failed to fetch workout data' });
    }
});

module.exports = router;