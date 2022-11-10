var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var monkeyanimal_controller = require('../controllers/monkeyanimal');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/monkeyanimal', monkeyanimal_controller.monkeyanimal_create_post);
// DELETE request to delete Costume.
router.delete('/monkeyanimal/:id', monkeyanimal_controller.monkeyanimal_delete);
// PUT request to update Costume.
router.put('/monkeyanimal/:id', monkeyanimal_controller.monkeyanimal_update_put);
// GET request for one monkeyanimal.
router.get('/monkeyanimal/:id', monkeyanimal_controller.monkeyanimal_detail);
// GET request for list of all monkeyanimal items.
router.get('/monkeyanimal', monkeyanimal_controller.monkeyanimal_list);
module.exports = router;