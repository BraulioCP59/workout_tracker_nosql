const router = require('express').Router();
const Workout = require('../../models/workout');


//get all workouts
router.get('/', async (req, res) => {
    try
    {
        const allWorkoutData = await Workout.find();
        res.status(200).json(allWorkoutData);
    }catch(err)
    {
        res.status(500).json(err);
    }
})

//get all workouts in range
router.get('/range', async (req, res) => {
    try
    {
        res.status(200).json({message: "you hit the get range route!"});
    }catch(err)
    {
        res.status(500).json(err);
    }
})

//get a workout by id
router.get('/:id', async (req, res) => {
    try
    {
        const workoutData = await Workout.findById(req.params.id);
        res.status(200).json(workoutData);
    }catch(err)
    {
        res.status(500).json(err);
    }
})

//create a new workout
router.post('/', async (req, res) => {
    try
    {
        const newWorkout = await Workout.create(req.body);
        res.status(204).json(newWorkout);
    }catch(err)
    {
        res.status(500).json(err);
    }
})

//update a workout by id
router.put('/:id', async (req, res) => {
    try
    {
        const updatedWorkout = await Workout.findByIdAndUpdate(req.params.id, {$push:{exercises:req.body}}, {new: true});
        res.status(204).json(updatedWorkout);
    }catch(err)
    {
        res.status(500).json(err);
    }
})


//delete a workout by id
router.delete('/:id', async (req, res) => {
    try
    {
        const deletedWorkout = await Workout.findByIdAndRemove(req.params.id);
        res.status(200).json({message: "Workout has been successfully deleted!", id: deletedWorkout._id});
    }catch(err)
    {
        res.status(500).json(err);
    }
})

module.exports = router;