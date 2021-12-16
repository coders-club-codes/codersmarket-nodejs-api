import jwt from 'jsonwebtoken';
import config from '../../config/auth';

export default (req, res, next) => {
  const { authorization } = req.headers;
  
  // 1. Verify if the authorization header was provided
  if (!authorization) {
    return res.status(401).json({ error: 'Missing authorization' });
  }

  // 'Bearer token123'
  const [_, token] = authorization.split(' ');

  try {
    // 2. Verify if there is a valid token
    const decoded = jwt.verify(token, config.secret);

    req.userID = decoded.id;
    // 3. If everything is okay, continue to the next middleware
    next();
  } catch (error) {
    console.log(error);
    if (error.name === 'JsonWebTokenError')
      return res.status(401).json({ error: 'Invalid token provided' });
    return res.status(500);
  }
};
