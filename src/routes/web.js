const express = require('express');
const router = express.Router();
const {getHomePage, getHoiDanIT, postCreateUser, getCreateUser} = require('../controllers/homeController');


router.get('/', getHomePage);

router.get('/hoidanit', getHoiDanIT);

router.get('/create', getCreateUser);

router.post('/create-user', postCreateUser);

module.exports = router;