// Lodash
const _ = require("lodash");
// ObjectID
const { ObjectID } = require("mongodb");

// Record Model
const { Record } = require("../../../models/record.js");
// User Model
const { User } = require("../../../models/user.js");

const updateRecord = async (req, res) => {
    try {
        // Get key, value from request body
        const { key, value } = req.body;
        // Keys
        const keys = ["allergy", "medication", "problem", "immunization", "vital_sign", "procedure"];
        // Check userType, key, value
        if (req.user.userType === "b" || !key || _.indexOf(keys, key) < 0 || !value) {
            throw new Error();
        }

        // Get record
        const record = await Record.findOne({ _creator: req.user._id });
        // Check record
        if (!record) {
            throw new Error(404);
        }

        if (req.user.userType === "s") {
            // Create ownerToken
            const ownerToken = record.generateOwnerToken(req.user);

            // Check value array
            value.forEach((val) => {
                // Update the record body
                record[key].push({
                    data: val,
                    owner: {
                        email: req.user.email,
                        sign: ownerToken
                    },
                    createdAt: new Date().getTime()
                });

                // Update the record log
                record.log.push({
                    action: `ADD:SELLER${req.user._id}:RECORD${record._id}:DATE${new Date().getTime().toString()}`,
                    body: { key, value: val },
                    enteredAt: new Date().toUTCString()
                });
            });

            // Update record
            await Record.updateOne(
                { _creator: req.user._id },
                { $set: record }
            );
        } else if (req.user.userType === "v") {
            // Get sellerEmail from request body
            const { sellerEmail } = req.body;
            // Check sellerEmail
            if (!sellerEmail) {
                throw new Error();
            }

            // Get seller
            const seller = await User.findOne({ email: sellerEmail, userType: "s" });
            // Check seller
            if (!seller) {
                throw new Error(404);
            }

            // Get sellerRecord
            const sellerRecord = await Record.findOne({ _creator: seller._id });
            // Check sellerRecord
            if (!sellerRecord) {
                throw new Error(404);
            }

            // Create ownerToken
            const ownerToken = sellerRecord.generateOwnerToken(seller);

            // Create verifierToken
            const verifierToken = record.generateOwnerToken(req.user);

            // Check value array
            value.forEach((val) => {
                // Update the record body
                record[key].push({
                    data: val,
                    owner: {
                        email: seller.email,
                        sign: ownerToken
                    },
                    verifier: {
                        email: req.user.email,
                        sign: verifierToken
                    },
                    createdAt: new Date().getTime()
                });

                // Update the record log
                record.log.push({
                    action: `ADD:VERIFIER${req.user._id}:SELLER${seller._id}:RECORD${record._id}:DATE${new Date().getTime().toString()}`,
                    body: { key, value: val },
                    createdAt: new Date().getTime()
                });
            });

            // Update record
            await Record.updateOne(
                { _creator: req.user._id },
                { $set: record }
            );
        }

        // Send JSON body
        res.json({ message: `${key} updated`, email: req.user.email });
    } catch (err) {
        if (process.env.NODE_ENV !== "test") { console.log(err); }
        // Not Found
        if (err && err.message === "404") {
            res.status(404).send();
        }
        // Error Bad Request
        res.status(400).send();
    }
};

const updateRecordById = async (req, res) => {
    try {
        // Get record id from params body
        const { id } = req.params;
        // Get value
        const { value } = req.body;
        // Check userType, id, value
        if (req.user.userType === "b" || !ObjectID.isValid(id) || !value) {
            throw new Error();
        }

        // Get record
        let record = await Record.findOne({ _creator: req.user._id });
        // Check record
        if (!record) {
            throw new Error(404);
        }

        // Update record body
        record = await record.updateByRecordId(id, value, req.user);
        // Check record
        if (!record) {
            throw new Error(404);
        }

        // Update record
        await Record.updateOne(
            { _creator: req.user._id },
            { $set: record }
        );

        // Send JSON body
        res.json({ message: "record updated", email: req.user.email });
    } catch (err) {
        if (process.env.NODE_ENV !== "test") { console.log(err); }
        // Not Found
        if (err && err.message === "404") {
            res.status(404).send();
        }
        // Error Bad Request
        res.status(400).send();
    }
};

module.exports = { updateRecord, updateRecordById };
