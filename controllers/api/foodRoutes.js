const router = require('express').Router();
const { application } = require('express');
const { Food } = require('../../models')
const {food} =  require('../../utils/food-api')


router.post("/", async (req, res) => {
  Food.create({
  name: req.body.name,
  description: req.body.description
 
  })
});

router.get("/", async (req, res) => {
  try{ 
      const foodData = await food();
      res.json(foodData)
  }
  catch(err){
      console.log(err);
      res.status(400).json(err)
  }
})






module.exports = router;