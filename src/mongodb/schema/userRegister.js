import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken"

// Define the user schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        minlength: [6, 'Name must be at least 6 characters long'],
    },
    mobile: {
        type: Number,
        required: true,
        trim: true,
        minlength: [10, 'mobile must be at least 10 characters long'],
    }
    ,
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        validate: {
            validator: (value) => validator.isEmail(value),
            message: 'Please enter a valid email address',
        },
    },
    role: {
        type: String,
        default: "user"
    },
    refreshToken: {
        type: String,
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: [8, 'Password must be at least 8 characters long'],
    },

}, { timestamps: true });

userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10)
    }
    next();
})


userSchema.methods.verifyPassword = async function (password) {
    try {
        password = password.toString();
        const isMatch = await bcrypt.compare(password, this.password);
        return isMatch;
    } catch (error) {
        throw new Error('Error verifying password');
    }
};



userSchema.methods.generateAccessToken = function () {

    try {
        return jwt.sign(
            {
                id: this._id,
                username: this.username,
                email: this.email,
                role: this.role
            },
            process.env.ACCESS_TOKEN_KEY,
            {
                expiresIn: Number(process.env.ACCESS_TOKEN_EXPIRY)
            }


        );
    } catch (error) {
        throw new Error(error.message);
    }
};

userSchema.methods.generateRefreshToken = function () {
    try {
        return jwt.sign(
            {
                id: this._id,
            },
            process.env.REFRESH_TOKEN_KEY,
            { expiresIn: Number(process.env.REFRESH_TOKEN_EXPIRY) }
        );
    } catch (error) {
        throw new Error(error.message);
    }
};

// Create the User model
const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
