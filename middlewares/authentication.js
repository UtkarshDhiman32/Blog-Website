// function checkForAuthenticationCookie(cookieName) {
//     return (req, res, next) => {
//         const tokenCookieValue = req.cookies[cookieName];
//         if (!tokenCookieValue) {
//             return next();
//         }
//         try {
//             const userPayload = validateToken(tokenCookieValue)
//             req.user = userPayload;
            
//         } catch (error) {}
//        return next();
//     }
// }

// middlewares/authentication.js
const { validateToken } = require('../services/authentication'); // Add this import

function checkForAuthenticationCookie(cookieName) {
    return (req, res, next) => {
        const tokenCookieValue = req.cookies[cookieName];
        if (!tokenCookieValue) {
            return next();
        }
        try {
            const userPayload = validateToken(tokenCookieValue);
            req.user = userPayload;
            res.locals.user = userPayload; // Make user available in templates
        } catch (error) {
            console.error("Token validation error:", error);
            // Clear invalid token
            res.clearCookie(cookieName);
        }
        return next();
    };
}

module.exports = {
    checkForAuthenticationCookie
};

