/*eslint-env node*/
module.exports = ( config, loaderFactory, partials ) => ( req, res, next ) => {

    var iaf = global.iaf.composition.iaf;

    function renderPartialToHTML( partial, partialModel ) {

        var element = iaf.React.createElement( partial, partialModel );
        return iaf.ReactServer.renderToString( element );

    }
    res.renderPartialPage = ( partialName, partialModel, viewOptions ) => {

        viewOptions = viewOptions || {};
        var partial = res.buildPartial( partialName, partialModel, viewOptions.containerId || "iaf565656565" );
        viewOptions.model = Object.assign( {}, viewOptions.model, { partial: partial } );
        viewOptions.view = viewOptions.view || "partial-page";
        res.render( viewOptions.view, viewOptions.model );

    };
    res.renderPartialDigest = ( partialName, partialModel, partialId ) => {

        loaderFactory.build( config, req.fullSchemeAndHost + "/public", ( err, loader ) => {

            if( err ) { throw err; }
            var digest = res.buildPartial( partialName, partialModel, partialId );
            digest.js.loader = loader;
            res.send( digest );

        } );

    };
    res.buildPartial = ( partialName, partialModel, containerId ) => {

        var partial = partials[ partialName ];
        if( !partial ) { throw new Error( "Unable to find partial: " + partialName ); }
        return {

            name: partialName,
            id: containerId,
            html: renderPartialToHTML( partial, partialModel ),
            js: { "start": "iaf[ \"" + config.ns + "\"].bootstrapPartial( \"" + partialName + "\", " + JSON.stringify( partialModel ) + ", \"#" + containerId + "\" );" }

        };

    };

    next();

};
