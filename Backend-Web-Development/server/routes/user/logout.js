const userLogout = async (req, res) => {
    try {
        // Remove authentication token
        await req.user.removeAuthToken(req.token);

        // Send JSON body
        res.json({ message: "logout successful", email: req.user.email });
    } catch (err) {
        if (err && process.env.NODE_ENV !== "test") { console.log(err); }
        // Error Bad Request
        res.status(400).send();
    }
};

module.exports = { userLogout };
