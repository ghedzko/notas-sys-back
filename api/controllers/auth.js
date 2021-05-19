const jwt = require("jsonwebtoken")

const signIn = (req, res) => {
    const token = jwt.sign({ id: 3 }, "SECRET", {
        expiresIn: 86400, // 24 hours
    })

    res.json({ token })
}

module.exports = {
    signIn,
}
