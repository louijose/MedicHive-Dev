// Lodash
const _ = require("lodash");

// UserData Model
const { UserData } = require("../../../models/userData.js");

const postUserData = async (req, res) => {
    try {
        // Get userType
        const { userType } = req.user;
        // Check name and address
        if (!req.body.name || !req.body.address) {
            throw new Error();
        }

        // Check userType
        if (userType === "s") {
            // Create body object from request body
            const body = _.pick(req.body, ["name", "address", "seller"]);
            body.userType = userType;
            body._creator = req.user._id;

            // Keys
            const keys = ["age", "weight", "sex", "occupation"];
            // Check seller keys
            if (_.difference(Object.keys(body.seller), keys).length !== 0) {
                throw new Error();
            }

            // Create instance of UserData model
            const userData = new UserData(body);
            // Save userData instance
            await userData.save();

            // Send JSON body
            res.json({ message: "user created", email: req.user.email });
        } else if (userType === "b") {
            // Create body object from request body
            const body = _.pick(req.body, ["name", "address", "buyer"]);
            body.userType = userType;
            body._creator = req.user._id;

            // Create instance of UserData model
            const userData = new UserData(body);
            // Save userData instance
            await userData.save();

            // Send JSON body
            res.json({ message: "user created", email: req.user.email });
        } else if (userType === "v") {
            // Create body object from request body
            const body = _.pick(req.body, ["name", "address", "verifier"]);
            body.userType = userType;
            body._creator = req.user._id;

            // Create instance of UserData model
            const userData = new UserData(body);
            // Save userData instance
            await userData.save();

            // Send JSON body
            res.json({ message: "user created", email: req.user.email });
        }
    } catch (err) {
        if (process.env.NODE_ENV !== "test") { console.log(err); }
        // Error Bad Request
        res.status(400).send();
    }
};

module.exports = { postUserData };
