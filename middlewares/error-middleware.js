function errorMiddleware(error, req, res, next) {
    let code = 500;
    let message = 'internal server error';

    if (error.name === 'JsonWebTokenError') {
        code = 401;
        message = 'invalid token';
    } else if (error.name === 'InvalidToken') {
        code = 401;
        message = 'invalid token';
    } else if (error.name === 'Unauthorized') {
        code = 401;
        message = 'unauthorized';
    } else if (error.name === 'ErrNotFound') {
        code = 404;
        message = 'data not found';
    } else if (error.name === 'SequelizeValidationError') {
        code = 400;
        message = error.errors.map((error) => {
            return error.message;
        });
    } else if (error.name === 'SequelizeForeignKeyConstraintError') {
        code = 400;
        message = 'user does not exists';
    } else if (
        error.name === 'EmailNotFound' ||
        error.name === 'WrongPassword'
    ) {
        code = 401;
        message = 'wrong email/password';
    } else if (error.name === 'SequelizeUniqueConstraintError') {
        code = 400;
        message = 'bad request';
    } else if (error.name === 'PageNotFound') {
        code = 404;
        message = 'Oops... nothing here';
    }
    return res.status(code).json({ message });
}

module.exports = errorMiddleware;
