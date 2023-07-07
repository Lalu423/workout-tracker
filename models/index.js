const User = require('./User');
const Workout = require('./Workout');
const Food = require('./Food');


User.hasMany(Workout, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});




module.exports = { User, Workout, Food }
