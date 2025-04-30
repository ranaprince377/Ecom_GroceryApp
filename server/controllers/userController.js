const User = require('./../models/user.model.js');
const {asyncHandler, ApiError, ApiResponse} = require('./../utils');

const getUserDetails = asyncHandler(async function (req, res) {
    console.log('Do something');
});

const updateUser = asyncHandler(async function (req, res) {
    console.log('Do something');
});

const createUser = asyncHandler(async function (req, res) {
    const { firstName, lastName, email, password, avatar } = req.body;

    const user = new User({
        firstName, lastName, email, password, avatar
    });

    await user.save();

    res.status(201).json(new ApiResponse(201, 'User registered successfully.', user));
});

const loginUser = asyncHandler(async function (req, res) {
    const { email, password } = req.body;

    if(!email){
        throw new ApiError(400, 'email is mandatory.')
    }

    if(!password){
        throw new ApiError(400, 'password is mandatory.');
    }

    const user = await User.findOne({email});

    if(!user){
        throw new ApiError(404, 'User does not exists.');
    }

    const verified = await user.verifyPassword(password);

    if(!verified){
        throw new ApiError(401, 'Invalid credentials.');
    }

    const accessToken = user.generateAccessToken({_id: user._id});
    const refreshToken = await user.generateRefreshToken({_id: user._id});
    
    const userData = await User.findOne({email}).select('-password -__v');
    
    const userObject = userData.toObject(); // Convert to plain object
    userObject.accessToken = accessToken; 

    res.status(200)
    .cookie('accessToken', accessToken, { httpOnly: true })
    .cookie('refreshToken', refreshToken, { httpOnly: true })
    .json(userObject);
});

const logout = asyncHandler(async function (req, res) {
    const userId = req.user._id;
    
    if (!userId) {
        throw new ApiError(401, "Unauthorized: No user found.");
    }

    // Update the user's refreshToken in the database
    await User.findByIdAndUpdate(userId, { refreshToken: null });

    // Clear the cookies properly
    res.status(200)
        .clearCookie('accessToken', { httpOnly: true })
        .clearCookie('refreshToken', { httpOnly: true })
        .json(new ApiResponse(200, `User logged out successfully.`));
});


module.exports = {
    getUserDetails,
    updateUser,
    createUser,
    loginUser,
    logout
};