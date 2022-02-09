const router = require('express').Router();
const path = require('path');


//router that serves the stats.html page
router.get('/', async (req, res) => {
    try
    {
        res.sendFile(path.join(__dirname, '../public/stats.html'));
        console.log("Server has loaded the stats page!!\n\n");
    }catch(err)
    {
        res.json({message: "404 PAGE NOT FOUND", body: err})
    }
});

module.exports = router;