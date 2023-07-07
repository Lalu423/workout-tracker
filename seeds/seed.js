const sequelize = require('../config/connection');
//const seedDatabase = require('../controllers/api/seedDbRoutes');
const { User, Workout, Food } = require('../models');

// const userData = [{username: "abc", email:"abc@mail.com", password: "12345678"}]
//const workoutData =[]

const userData = require('./userData.json');
const workoutData = require('./workoutData.json');



const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });


    for (const workout of workoutData) {
        //may need to make this unique
        let id = Math.floor(Math.random() * users.length);
        users[id].isSoftDeleted()


        await Workout.create({
            ...workout,
            user_id: id + 1,
        });
    }
};

module.exports = seedDatabase;