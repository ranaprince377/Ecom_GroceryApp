const {asyncHandler, ApiError} = require('./../utils');
const jwt = require('jsonwebtoken');

const authenticate = asyncHandler(async (req, res, next) => {
    // Get token from cookies or Authorization header
    const accessToken = req.cookies.accessToken || req.header('Authorization')?.replace('Bearer ', '');

    if (!accessToken) {
        throw new ApiError(401, 'Unauthorized access.');
    }

    // Verify token
    jwt.verify(accessToken, process.env.JWT_ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) {
            throw new ApiError(401, "Unauthorized access.");
        }
        req.user = decoded;
        next();
    });
    
    // const decoded = jwt.verify(accessToken, process.env.JWT_ACCESS_TOKEN_SECRET);
    // if (!decoded) {
    //     throw new ApiError(401, "Unauthorized access.");
    // }
    // next();
});

module.exports = authenticate;