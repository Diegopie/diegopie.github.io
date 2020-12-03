const express = require('express');
const router = express.Router();

// Index Page
router.get('/', function (req, res) {
    res.render('index');
});

router.get('/portfolio', function (req, res) {
    res.render('portfolio');
});

router.get('/contact', function (req, res) {
    res.render('contact');
});



module.exports = router;