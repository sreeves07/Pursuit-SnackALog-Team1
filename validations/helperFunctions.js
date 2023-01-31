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
    if (typeof image === undefined || image === "") {
        newImage = "https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image"
        req.body.image = newImage
        next()
    } else if (image.substring(0, 8) === "https://"){
        next()
    } else {
        res.status(400).json({error: "Image URL starts with https://"})
    } 
}

// const checkHealth = (req, res, next) => {
//     let fiber = req.body.fiber
//     let protein = req.body.protein
//     let addedSugar = req.body.added_sugar
//     let isHealthy = false

//     if(fiber >= 5 && protein >= 5 && addedSugar <= 5) {
//         isHealthy = true
//     }
//     const newBody = {...req.body, is_healthy: isHealthy}
//     res.status(200).json(newBody)
//     next()
// }

module.exports = { checkName, checkBoolean, checkImage }