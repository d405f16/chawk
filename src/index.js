var drone = require('ar-drone');
var client = drone.createClient();

client.once('navdata', function (navdata) {
    var functions = require('./functions')(client, navdata);
    require('../tmp/compiled')(functions);
    route();
    setup();
});

