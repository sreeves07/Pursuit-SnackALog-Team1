const checkName = (req, res, next) => {
  if (req.body.name) {
    next();
  } else {
    res.status(400).json({ error: "Name is required" });
  }
};

const validateURL = (req, res, next) => {
  if (
    req.body.url.substring(0, 7) === "http://" ||
    req.body.url.substring(0, 8) === "https://"
  ) {
    return next();
  } else {
    res
      .status(400)
      .json({ error: `You forgot to start your url with http:// or https://` });
  }
};

const checkHealth = (snack) => {
  if (isNaN(snack.added_sugar) || isNaN(snack.protein) || isNaN(snack.fiber)) {
    return null;
  } else if (snack.added_sugar > 5 || snack.protein < 5 || snack.fiber < 5) {
    return false;
  } else {
    return true;
  }
};

const nameFormatter = (req, res, next) => {
  return req.body.name
    .toLowerCase()
    .split(" ")
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(" ");
};

module.exports = { checkName, validateURL, checkHealth, nameFormatter };
