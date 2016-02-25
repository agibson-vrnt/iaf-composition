/*eslint-env node*/

var path = require( "path" );

module.exports = {

    entry: {

        "public/js/bundle": path.resolve( __dirname, "js/partials.js" )

    },
    output: {

        path: path.resolve( __dirname, "app" ),
        publicPath: "/",
        filename: "[name].js",
        libraryTarget: "umd"

    },
    module: {

        "loaders": [

            {
                test: /.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query: {
                    presets: [ "es2015", "react" ]
                }
            }

        ]

    }

};
