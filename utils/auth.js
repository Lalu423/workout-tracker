const withAuth = (req, res, next) => {
    //if user is not logged in, redirect the request to the login route
    if (!req.session.logged_in) {
        res.direct('/login');
    } else {
        next();
    }
};

module.exports = withAuth;