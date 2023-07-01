const express = require('express');
const app = express();
app.use(express.json());

class Food extends Model {}

const macros = [
    { name: 'Carbohydrates', description: 'A major source of energy for the body.' },
    { name: 'Protains', description: 'Essential for building and reparing tissues and supporting various bodily functions.' },
    { name: 'Fats', description: 'Provide energy, aid in nutrient absorption, and support cell growth'}
];

app.get('/macros', (req, res) => {
    res.json(macros);
});

const mealPlan = [
    { name: 'Breakfast', foods: ['Oatmeal', 'Eggs', 'Avocado'] },
    { name: 'Lunch', foods: ['Chicken Breast', 'Brown Rice', 'Brocolli'] },
    { name: 'Dinner', foods: ['Salmon', 'Quinoa', 'Asparagus'] }
];

app.get('/meal-plan', (req, res) => {
    res.json(mealPlan);
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
})

module.exports = Food;