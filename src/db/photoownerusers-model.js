const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    }
});

userSchema.pre("save", async function (next) {
    const user = this;
    // Hashing newly created /modified passowrd only
    if (user.isModified("password")) {
        user.password = await bcrypt.hash(user.password, 8);
    }
    next();
})


userSchema.statics.findByCredentials = async (username, password) => {
    // Step 1 Find user by username provided in request.
    const user = await User.findOne({ username });
    console.log('FOUND USER ', user);
    if (!user) {
        throw new Error("Unable to login. Username not matched.");
    }
    //    Step 2 once username match then match password hashed.
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error("Unable to login. Passowrd not match");
    }
    return user;
}

const User = mongoose.model("User", userSchema);
module.exports = User;