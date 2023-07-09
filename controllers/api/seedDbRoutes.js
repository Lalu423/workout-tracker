const router = require('express').Router();
const seedDb = require('../../seeds/seed');
const { User, Workout, Food } = require('../../models');

// const userData = require('./userData.json');
// const wokroutData = require('./workoutData.json');

router.post("/", async (req, res)=> {
  if(req.body.password === process.env.SEED_PASSWORD){
    await seedDb();
    res.status(200).json({message: "finished seed"});
  }
  else{
    res.status(400).json({message: "failed password"});
  }
  
});

// const seedDatabase = async () => {
//     await sequelize.sync({ force: true });

//     const users = await User.bulkCreate(userData, {
//     individualHooks: true,
//     returning: true,
//   });

//   for (const project of projectData) {
//     await Project.create({
//       ...project,
//       user_id: users[Math.floor(Math.random() * users.length)].id,
//     });
//   }
// };

module.exports = seedDb;