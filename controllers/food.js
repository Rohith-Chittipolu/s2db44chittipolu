var food = require('../models/food'); 
 
// List of all Food 
 
exports.food_list = async function(req, res) { 
    try{ 
        thefood = await food.find(); 
        res.send(thefood); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};  
 
// for a specific Food. 
exports.food_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: food detail: ' + req.params.id); 
}; 
 
// Handle Costume create on POST. 
exports.food_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new food(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {Food_name:noodles,cuisine:chinese,calories:345} 
    document.Food_name = req.body.Food_name; 
    document.cuisine = req.body.cuisine; 
    document.calories = req.body.calories; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle food delete form on DELETE. 
exports.food_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Food delete DELETE ' + req.params.id); 
}; 
 
// Handle Food update form on PUT. 
exports.food_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Food update PUT' + req.params.id); 
};
// VIEWS 
// Handle a show all view 
exports.food_view_all_Page = async function(req, res) { 
    try{ 
        thefood = await food.find(); 
        res.render('food', { title: 'food Search Results', results: thefood }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
