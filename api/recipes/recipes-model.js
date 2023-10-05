
function getRecipeById(recipe_id){
    //test
    return Promise.resolve(`model: awesome recipe ${recipe_id}`)
}

module.exports = {
    getRecipeById
}