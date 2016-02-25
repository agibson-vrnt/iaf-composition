/*eslint-env node*/

module.exports = ( req, res, next ) => {

    console.log( req.method, req.url ); //eslint-disable-line no-console
    next();

};

