const ApiError = require('../exceptions/ApiError');

class ErrorMiddleware {

  filterError(error, request, response, next) {
    console.log(error)
    if (error instanceof ApiError) {
      return response.status(error.status).json({ message: error.message, errors: error.errors })
    }

    return response.status(500).json({ message: "Unexpected error" })
  }
}

module.exports = new ErrorMiddleware()