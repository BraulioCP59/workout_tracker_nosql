const router = require('express').Router();
const workout_routes = require('./workout');

router.use('/workouts', workout_routes);

module.exports = router;