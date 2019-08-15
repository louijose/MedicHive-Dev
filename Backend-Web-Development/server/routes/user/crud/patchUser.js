// Lodash
const _ = require("lodash");

// User Model
const { User } = require("../../../models/user.js");

const updateUser = async (req, res) => {
    try {
        // Get key, value from request body
        const { key, value } = req.body;
        // Keys
        const keys = ["email", "password"];
        // Check key and value
        if (!key || _.indexOf(keys, key) < 0 || !value) {
            throw new Error();
        }

        // Check key to update
        if (key === "email") {
            // Check user email same as value
            if (req.user.email === value) {
                throw new Error();
            }

            // Update email
            await User.updateOne(
                { _id: req.user._id },
                { $set: { email: value } }
            );

            // Send JSON body
            res.json({ message: `${key} updated`, email: value });
        } else if (key === "password") {
            // Check user password same as value
            const check = await User.findByCredentials(req.user.email, value);
            if (check) {
                throw new Error();
            }

            // Update password
            await User.updateOne(
                { _id: req.user._id },
                { $set: { password: value } }
            );

            // Send JSON body
            res.json({ message: `${key} updated`, email: req.user.email });
        }
    } catch (err) {
        if (err && process.env.NODE_ENV !== "test") { console.log(err); }
        // Error Bad Request
        res.status(400).send();
    }
};

module.exports = { updateUser };
