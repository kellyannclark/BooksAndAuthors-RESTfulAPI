const router = require('express').Router();
const passport = require('passport');


router.use("/", require("./swagger"));
router.use("/gospelbooks", require("./gospelbooks")); 
router.use("/authors", require("./authors"));

router.get('/login', passport.authenticate('github'), (req, res) => {});

// router.get("/", (req, res) => {
//     //swagger.tags=['Hello World']
//     res.send("Hello World"); });

router.get('/logout', function(req, res, next) {
    req.logout(function(err) {
        if(err) return next(err);
        res.redirect('/');
    });
});

module.exports = router;


