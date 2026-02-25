const express = require('express');
const router = express.Router();
const {getHomePage, getHoiDanIT, postCreateUser, getCreateUser, getUpdateUser, postUpdateUser, postDeleteUser} = require('../controllers/homeController');


router.get('/', getHomePage);

router.get('/hoidanit', getHoiDanIT);

router.get('/create', getCreateUser);

router.post('/create-user', postCreateUser);

router.get('/update/:id', getUpdateUser);

router.post('/update-user', postUpdateUser);

router.get('/delete/:id', postDeleteUser);

module.exports = router;