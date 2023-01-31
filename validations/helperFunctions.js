const checkName = (req, res, next) => {
    let input = req.body.name
    input = input.trim().split(" ")
    if (input.length) {
        let newInput = input.map((word) => {
            return word[0].toUpperCase() + word.substring(1)
        }).join(" ")
        req.body.name = newInput
        next()
    } else {
      res.status(400).json({ error: "Invalid Name Input" });
    }
};

module.exports = { checkName }