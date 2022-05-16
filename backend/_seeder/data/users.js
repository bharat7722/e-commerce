const bcrypt = require("bcryptjs")
const users = [
    {
        name: "akash",
        email: "akash@skillhubapp.com",
        password: bcrypt.hashSync("123", 10),
        isAdmin: true,
    },
    {
        name: "john",
        email: "john@skillhubapp.com",
        password: bcrypt.hashSync("123", 10),
        isAdmin: false,
    },
]

module.exports = users