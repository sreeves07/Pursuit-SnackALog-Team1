const checkName = (req, res, next) => {
    if (req.body.name.length >= 2) {
        req.body.name = req.body.name.charAt(0).toUpperCase() + req.body.name.slice(1).toLowerCase()
        next()
    } else {
      res.status(400).json({ error: "Invalid Name Input" });
    }
};

module.exports = { checkName }