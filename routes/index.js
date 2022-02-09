const router = require('express').Router();
const exercise_page = require('./exercise');
const stats_page = require('./stats');

router.use('/exercise', exercise_page);
router.use('/stats', stats_page);



module.exports = router;