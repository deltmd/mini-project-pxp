// REQUIRE DEPENDENCIES
// ============================================================
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

// INITILIZE APP
// ============================================================
var app = module.exports = express();

// CONTROLLERS
// ============================================================
// var testCtrl = require('./server_controllers/testCtrl');

// INITILIZE DEPENDENCIES
// ============================================================
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));


// ENDPOINTS
// ============================================================
// MODEL ENDPOINTS
// app.get('/test', testCtrl.read);
// app.post('/model', testCtrl.create);
// app.put('/model/:id', testCtrl.update);
// app.delete('/model/:id', testCtrl.delete);

// VARIABLES
// ============================================================

var port = 8000;

// LISTEN
// ============================================================
app.listen(port, function() {
  console.log('listening on port ', port);
});
