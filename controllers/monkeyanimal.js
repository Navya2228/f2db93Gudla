var monkeyanimal = require('../models/monkeyanimal');
// List of all monkeyanimals
exports.monkeyanimal_list = function(req, res) {
 res.send('NOT IMPLEMENTED: monkeyanimal list');
};
// for a specific monkeyanimal.
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

// Handle monkeyanimal create on POST.
exports.monkeyanimal_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: monkeyanimal create POST');
};
// Handle monkeyanimal delete form on DELETE.
exports.monkeyanimal_delete =  async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await monkeyanimal.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };
// Handle monkeyanimal update form on PUT.
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

   // List of all monkeyanimals
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
   // Handle monkeyanimal create on POST.
exports.monkeyanimal_create_post = async function(req, res) {
    console.log(req.body)
    let document = new monkeyanimal();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"monkeyanimal_type":"goat", "cost":12, "size":"large"}
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
exports.monkeyanimal_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await monkeyanimal.findById( req.query.id)
    res.render('monkeyanimaldetail',
   { title: 'monkeyanimal Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
};
exports.monkeyanimal_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('monkeyanimalcreate', { title: 'monkeyanimal Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
exports.monkeyanimal_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await monkeyanimal.findById(req.query.id)
    res.render('monkeyanimalupdate', { title: 'monkeyanimal Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
exports.monkeyanimal_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await monkeyanimal.findById(req.query.id)
    res.render('monkeyanimaldelete', { title: 'monkeyanimal Delete', toShow:
   result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
