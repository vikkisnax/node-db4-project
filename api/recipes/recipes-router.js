const router = require('express').Router()
//model
const Recipe = require('./recipes-model')

router.get('/:recipe_id', (req, res, next)=>{
    Recipe.getRecipeById(req.params.recipe_id)
    .then(resource => {
        res.status(200).json(resource)
    })
    .catch(next)
})

//error handling mw
router.use((err, req, res, next)=>{ //eslint-disable-line
    res.status(500).json({
        customMessage: 'something went wrong inside the recipes router',
        message:err.message,
        stack: err.stack,
    })
})


module.exports = router