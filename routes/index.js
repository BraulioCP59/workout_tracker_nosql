const router = require('express').Router();
const exercise_page = require('./exercise');
const stats_page = require('./stats');
const api_routes = require('./api');

router.use('/exercise', exercise_page);
router.use('/stats', stats_page);
router.use('/api', api_routes);



module.exports = router;