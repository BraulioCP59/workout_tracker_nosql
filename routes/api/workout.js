const router = require('express').Router();
//require some model. 

//get all workouts
router.get('/', async (req, res) => {
    try
    {
        res.status(200).json({message: "you hit the get all route!"});
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
        res.status(200).json({message: "you hit the get by id route!"});
    }catch(err)
    {
        res.status(500).json(err);
    }
})

//create a new workout
router.post('/', async (req, res) => {
    try
    {
        res.status(204).json({message: "you hit the post route!"});
    }catch(err)
    {
        res.status(500).json(err);
    }
})

//update a workout by id
router.put('/:id', async (req, res) => {
    try
    {
        res.status(204).json({message: "you hit the put by id route!"});
    }catch(err)
    {
        res.status(500).json(err);
    }
})


//delete a workout by id
router.get('/:id', async (req, res) => {
    try
    {
        res.status(204).json({message: "you hit the delete by id route!"});
    }catch(err)
    {
        res.status(500).json(err);
    }
})

module.exports = router;