const { ApiError } = require('@validators/errors/ApiError');

// у errorHandler обязательно должно быть 4 аргумента!
module.exports = (err, req, res, next) => {
    if (err instanceof ApiError) {
        return err.sendResponse(res);
    }

    return res.status(500).json({ message: err.message });
};