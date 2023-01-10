const jwt = require("jsonwebtoken")

class AuthMiddleware {
    async adminAuth(request, response, next){
        try {
             // Get the jwt token
             let token = request.headers["x-access-token"];
             if (request.headers.authorization && request.headers.authorization.startsWith("Bearer")) {
                 token = request.headers.authorization.split(" ")[1];
             }

             // Verify if token is present
             if (!token) {
                 return response.status(401).json({ error: "You are not logged in! Please login in to continue" })
             }

             // Verify token
             jwt.verify(token, process.env.JWT_SECRET, (error, decodedToken) => {
                 if (error) {
                     return response.status(401).json({ error: "Not authorized" })
                 } else {
                     if (decodedToken.admin_root) {
                         next()
                     } else {
                         // If admin_root is false
                         return response.status(401).json({ error: "Not authorized, only admin" })
                     }
                 }
            });
        } catch (error) {
            return await response.status(500).json(JSON.stringify(error))
        }
    }

    async userAuth(request, response, next){
        // Get the jwt token
        let token
        if (request.headers.authorization && request.headers.authorization.startsWith("Bearer")) {
            token = request.headers.authorization.split(" ")[1];
        }

        // Verify if token is present
        if (!token) {
            return response.status(401).json({ error: "You are not logged in! Please login in to continue" })
        }

        // Verify token
        jwt.verify(token, process.env.JWT_SECRET, (error, decodedToken) =>{
            if (error) {
                return response.status(401).json({ error: "Not authorized" })
            } else {
                if (decodedToken.admin_root) {
                    return response.status(401).json({ error: "Not authorized" })
                } else {
                    next()
                }
            }
        });

        // If token is not available
        return response.status(401).json({ error: "Not authorized, token not available" })
    }
}

module.exports = new AuthMiddleware()