/*eslint-env node*/

var request = require( "request" );
var vm = require( "vm" );

module.exports = {

    fetch: ( app, config, callback ) => {

        request( config.iaf.serverUrl, ( err, response, body ) => {

            var sandbox = {};
            vm.runInNewContext( body, sandbox );
            var iaf = sandbox.default;
            global.iaf = { };
            global.iaf[ config.ns ] = { iaf: iaf };
            callback();

        } );

    }

};
