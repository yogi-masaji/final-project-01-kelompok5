const jwt = require('jsonwebtoken');
const User = require('./../models/User');

async function authMiddleware(req, res, next) {
    const { authorization } = req.headers;
    const userToken = authorization.split('Bearer ');
    try {
        if (userToken.length !== 2) throw { name: 'InvalidToken' };
        const { email } = jwt.verify(userToken[1], process.env.SECRET_KEY);
        const user = await User.getUser(email);

        if (!user) throw { name: 'Unauthorized' };
        req.user = { email };
        next();
    } catch (error) {
        next(error);
    }
}

module.exports = authMiddleware;
