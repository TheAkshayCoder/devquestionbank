const express = require('express')
const {getHomePageData, getTestPageData} = require('../controller/products')

const router = express.Router();


router.route('/').get(getHomePageData);
router.route('/testing').get(getTestPageData);

module.exports = router;