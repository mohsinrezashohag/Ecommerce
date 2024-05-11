const resHandler = require("../utils/resHandler");
const jwt = require("jsonwebtoken");

module.exports.isAuthenticated = async (req, res, next) => {
    try {

        console.log("middle war is jhamela");

        console.log(req.body);
        const { token } = req.cookies;

        console.log("token in m",token);
        if (!token) {
            return resHandler(res, 401, false, "Please login first");
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

        // Assuming `User` is properly imported and represents your User model
        req.user = await User.findById(decoded.id);

        if (!req.user) {
            return resHandler(res, 401, false, "Invalid user");
        }

        next();
    } catch (error) {
        return resHandler(res, 401, false, "Unauthorized");
    }
};
