const kellyRoute = (req, res) => {
    res.send("Kelly");
};

const hannahRoute = (req, res) => {
    res.send("Hannah");
};

module.exports = {
    kellyRoute,
    hannahRoute
};