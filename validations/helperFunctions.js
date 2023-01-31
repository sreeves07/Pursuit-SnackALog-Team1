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

const checkBoolean = (req, res, next) => {
    let health = req.body.is_healthy
    if (typeof health === "boolean" ||  health === undefined) {
        next()
    } else {
        res.status(400).json({ error: "is_healthy should be TRUE or FALSE"})
    }
}

const checkImage = (req, res, next) => {
    let image = req.body.image
    if (!image) {
        image = 'https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image'
    } else {
        if (image.substring(0, 7) !== 'https://') {
            res.status(400).json({ error: "Image must have valid https:// URL"})
        }
    }
}


module.exports = { checkName }