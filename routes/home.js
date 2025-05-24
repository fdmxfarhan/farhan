var express = require('express');
var router = express.Router();
const { ensureAuthenticated } = require('../config/auth');

router.get('/', (req, res, next) => {
    res.render('home', {lang: 'EN'});
    // res.redirect('/rcj');
});
router.get('/home', (req, res, next) => {
    res.render('home', {lang: 'EN'});
});
router.get('/home2', (req, res, next) => {
    res.render('home2', {lang: 'EN'});
});
router.get('/about', (req, res, next) => {
    res.render('about', {lang: 'EN'});
});

module.exports = router;
