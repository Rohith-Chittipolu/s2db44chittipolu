var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api');     
var food_controller = require('../controllers/food'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/resource', api_controller.api); 
 
/// Food ROUTES /// 
 
// POST request for creating a Food.  
router.post('/resource/food', food_controller.food_create_post); 
 
// DELETE request to delete Food. 
router.delete('/resource/food/:id', food_controller.food_delete); 
 
// PUT request to update Food. 
router.put('/resource/food/:id', 
food_controller.food_update_put); 
 
// GET request for one Food. 
router.get('/resource/food/:id', food_controller.food_detail); 
 
// GET request for list of all Food items. 
router.get('/resource/food', food_controller.food_list); 
/* GET detail food page */ 
router.get('/detail', food_controller.food_view_one_Page); 
/* GET create costume page */ 
router.get('/create',food_controller.food_create_Page);
/* GET create update page */ 
router.get('/update', food_controller.food_update_Page); 
/* GET delete food page */ 
router.get('/delete', food_controller.food_delete_Page);
 
module.exports = router; 
 