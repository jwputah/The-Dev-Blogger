const withAuth = (req, res, next) => {
    if (!req.session.user_id) {
        console.log("Not logged in");
        res.redirect("/login");
    } else {
        console.log("Logged in");
        next();
    }
};

module.exports = withAuth;