/*eslint-env node*/
/*eslint-disable no-underscore-dangle*/// -- this is a handlebars convention

var expressHandlebars = require( "express-handlebars" );


module.exports = {

    configure: ( app ) => {

        var handlebars = expressHandlebars.create( {

            defaultLayout: "main",
            extname: ".hbs",
            views: __dirname + "/views",
            partialsDir: __dirname + "/views",
            helpers: {

                placeholder: function(name){

                    var blocks = this._blocks;
                    var content = blocks && blocks[name];
                    return content ? content.join( "\n" ) : null;
                },
                content: function(name, options){

                    var blocks = this._blocks || (this._blocks = {});
                    var block = blocks[name] || (blocks[name] = []); //Changed this to [] instead of {}
                    block.push(options.fn(this));

                }

            }

        } );
        app.engine( ".hbs", handlebars.engine );
        app.set( "view engine", ".hbs" );

    }

};
