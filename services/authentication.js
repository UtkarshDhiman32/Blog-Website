// const JWT = require("jsonwebtoken")

// const secret = "$uperMan@123"

// function createTokenForUser(user) {
//     const payload = {
//         _id: user.id,
//         email: user.email,
//         profileImageURL: user.profileImageURL,
//         role: user.role,
//     };

//     const token = JWT.sign(payload, secret);
//     return token;
// }

// function validateToken(token) {
//     const payload = JWT.verify(token, secret);
//     return payload;
// }

// module.exports = {
//     createTokenForUser,
//     validateToken
// }

// services/authentication.js
const JWT = require("jsonwebtoken");
const secret = "$uperMan@123";

function createTokenForUser(user) {
    const payload = {
        _id: user._id,  // Changed from user.id to user._id to match MongoDB
        email: user.email,
        fullName: user.fullName,
        profileImageURL: user.profileImageURL,
        role: user.role,
    };
    return JWT.sign(payload, secret);
}

function validateToken(token) {
    return JWT.verify(token, secret);
}

module.exports = {
    createTokenForUser,
    validateToken
};