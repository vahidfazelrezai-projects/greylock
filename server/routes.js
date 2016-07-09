// IMPORTS //
var router = require('express').Router();
var path = require('path');

// ROUTES //
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../client/views/index.html'));
});

module.exports = router;
