const jwt = require('jsonwebtoken');
const User = require('./../models/User');

async function authMiddleware(req, res, next) {
    try {
        const { authorization } = req.headers;
        // Cek Token jika tidak error menjadi Internal Server Error
        if (!authorization) {
            throw {name: "Unauthorized"}
        }
        const userToken = authorization.split('Bearer ');
        if (userToken.length !== 2) throw { name: 'InvalidToken' };
        const { email } = jwt.verify(userToken[1], process.env.SECRET_KEY);

        const user = await User.getUser(email);
        if (!user) throw { name: 'Unauthorized' };
        const { id } = user;
        req.user = { id, email };
        next();
    } catch (error) {
        // res.status(401).json({message: 'unauthorized'});
        next(error);
    }
}

module.exports = authMiddleware;
