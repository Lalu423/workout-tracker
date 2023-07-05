<<<<<<< HEAD



=======
const User = require('./User');
const Workout = require('./Workout');
const Food = require('./Food');

User.hasMany(Workout, {
    foreignKey: 'user_id', 
    onDelete: 'CASCADE'
});




module.exports = { User, Workout, Food }
>>>>>>> e7e8d4eeccd9cffb1bf50d24cc4b157481343e56
