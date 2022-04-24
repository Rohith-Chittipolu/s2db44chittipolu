var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api');     
var food_controller = require('../controllers/food'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// Food ROUTES /// 
 
// POST request for creating a Food.  
router.post('/food', food_controller.food_create_post); 
 
// DELETE request to delete Food. 
router.delete('/food/:id', food_controller.food_delete); 
 
// PUT request to update Food. 
router.put('/food/:id', 
food_controller.food_update_put); 
 
// GET request for one Food. 
router.get('/food/:id', food_controller.food_detail); 
 
// GET request for list of all Food items. 
router.get('/food', food_controller.food_list); 
module.exports = router; 
 