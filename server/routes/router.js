const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const allController = require('../controller/allcontroller');

const sessions = require('express-session');

// CLIENT SIDE ROUTE//
router.get('/', allController.homePage); // HOMEPAGE


module.exports = router;
