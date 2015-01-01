var passport = require('passport');
var express = require('express');
var router = express.Router();

router.get('/auth/facebook', passport.authenticate('facebook'));

router.get('/auth/facebook/callback',
	passport.authenticate('facebook', { successRedirect: '/',
										failureRedirect: '/login' }));

router.get('/', function(req, res) {
	res.render('index', {name: req.user['displayName']});
});

module.exports = router;
