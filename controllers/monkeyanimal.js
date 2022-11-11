var monkeyanimal = require('../models/monkeyanimal');
// List of all Costumes
exports.monkeyanimal_list = function(req, res) {
 res.send('NOT IMPLEMENTED: monkeyanimal list');
};
// for a specific Costume.
exports.monkeyanimal_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await monkeyanimal.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };

// Handle Costume create on POST.
exports.monkeyanimal_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: monkeyanimal create POST');
};
// Handle Costume delete form on DELETE.
exports.monkeyanimal_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: monkeyanimal delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.monkeyanimal_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await monkeyanimal.findById( req.params.id)
    // Do updates of properties
    if(req.body.monkeyAge)
    toUpdate.monkeyAge = req.body.monkeyAge;
    if(req.body.monkeyName) toUpdate.monkeyName = req.body.monkeyName;
    if(req.body.monkeyBreed) toUpdate.monkeyBreed = req.body.monkeyBreed;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
    };
// VIEWS

   // List of all Costumes
exports.monkeyanimal_list = async function(req, res) {
    try{
    themonkeyanimal = await monkeyanimal.find();
    res.send(themonkeyanimal);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   // VIEWS
// Handle a show all view
exports.monkeyanimal_view_all_Page = async function(req, res) {
    try{
    themonkeyanimal = await monkeyanimal.find();
    res.render('monkeyanimal', { title: 'monkeyanimal Search Results', results: themonkeyanimal });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   // Handle Costume create on POST.
exports.monkeyanimal_create_post = async function(req, res) {
    console.log(req.body)
    let document = new monkeyanimal();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.monkeyAge = req.body.monkeyAge;
    document.monkeyName = req.body.monkeyName;
    document.monkeyBreed = req.body.monkeyBreed;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
}