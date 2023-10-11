const express = require('express');
const bodyParser = require("body-parser");
const session = require('express-session');
const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
const cors = require('cors');
const mongodb = require('./data/database');
const env = require("dotenv").config()


const app = express();
const port = process.env.PORT || 3000;

app
    .use(bodyParser.json())
    .use(session({
        secret: 'secret',
        resave: false,
        saveUninitialized: true,
    }))
    //This is the basic express session initialization
    .use(passport.initialize())
    //init passport on every route call
    .use(passport.session())
    //allow passport to use "express-session"
    .use((req, res, next) =>{
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader(
            "Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-type, Accept, Z-Key"
        );
        res.setHeader(
            "Access-Control-Allow-Methods", 
            "GET, POST, PUT, PATCH, DELETE, OPTIONS"
            );
        next();
    })

.use(cors({methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'UPDATE']}))
.use(cors({origin: '*'}))

app.use("/", require("./routes"));  

passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL
    },
    function(accessToken, refreshToken, profile, done) {
        //User.fineOrCreate({githubId: profile.id}, function (err, user)
        return done(null, profile);
          //});
    }
));

passport.serializeUser((user, done) =>{
    done(null, user);
});
passport.deserializeUser((user, done) =>{
    done(null, user);
});

app.get('/', (req, res) => { res.send(req.session.user !== undefined ? `Logged in as ${req.session.user.displayName}`: 'Logged out')});
  

app.get('/github/callback', passport.authenticate('github', {
    failureRedirect: '/api-docs', session: false
}), (req, res) => {
    req.session.user = req.user;
    res.redirect('/');
});


mongodb.initDb((err) => {     //initializes MongoDB database connection and starts Node.js -
    if (err) {                //Express only if database initialization is successful (ensures apps 
        console.log(err);     //dependencies like database are properly set up before accepting incoming requests)
    } else {
        app.listen(port, () => {   //starts client
            console.log(`Database is listening, and node is running on port ${port}`);
        });
    }
});