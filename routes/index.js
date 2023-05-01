const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
}); 


// Route to handle user information
router.get('/user/:name/:age/:sex', (req, res) => {
  const { name, age, sex } = req.params;
  const user = {
    name,
    age,
    sex,
  };
  res.json(user);
});

module.exports = router;

