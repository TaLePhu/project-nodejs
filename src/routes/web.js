const express = require('express');
const router = express.Router();



router.get('/', (req, res) => {
  res.send('Hello World and setting nodemo')
});

router.get('/hoidanit', (req, res) => {
    res.render('sample.ejs')
})

module.exports = router;