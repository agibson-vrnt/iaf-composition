/*eslint-env node*/
module.exports = ( req, res, next ) => {

    req.fullSchemeAndHost = req.protocol + "://" + req.get("host");
    next();

};
