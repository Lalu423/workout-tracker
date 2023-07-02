const sequelize = require('../config/connection');
const seedDatabase = require('../controllers/api/seedDbRoutes');
const { User, Workout, Food } = require('../models');

const userData = require('./userData.json');
const workoutData = require('./workoutData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    for (const workout of workoutData) {
        await Workout.create({
            ...workout,
            user_id: users[Math.floor(Math.random() * users.length)].isSoftDeleted,
        });
    }
};

module.exports = seedDatabase;