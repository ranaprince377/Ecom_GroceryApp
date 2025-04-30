const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Schema = mongoose.Schema;

const addressSchema = new mongoose.Schema({
    addType: {
        type: String,
        enum: ["home", "office", "other"]
    },
    pincode: String,
    city: String,
    state: String,
    landmark: String
}, {_id: false});

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        unique: [true, 'User already exists with same email.'],
        required: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    avatar: {
        type: String, // cloudinary url
        // required: true,
    },
    role: {
        type: String,
        enum: ["admin", "user", "editor"],
        default: "user"
    },
    refreshToken: String,
    address: {
        type: [addressSchema]
    }

}, { timestamps: true });

userSchema.pre('save', async function(next){
    if(this.isModified('password')){
        const encPwd = await bcrypt.hash(this.password, 10);

        this.password = encPwd;
    }

    next();
});

userSchema.methods.verifyPassword = async function(password){
    return await bcrypt.compare(password, this.password);
}

userSchema.methods.generateAccessToken = function(data){
    return jwt.sign(data, process.env.JWT_ACCESS_TOKEN_SECRET, {expiresIn: '5m'});
}

userSchema.methods.generateRefreshToken = async function(data){
    const refreshToken = jwt.sign(data, process.env.JWT_REFRESH_TOKEN_SECRET, {expiresIn: '1d'});

    this.refreshToken = refreshToken;
    await this.save();

    return refreshToken;
}

const User = mongoose.model('User', userSchema);

module.exports = User;