import jwt, { JwtPayload, Secret } from 'jsonwebtoken';
const createToken = (
  payload: Record<string, unknown>,
  secret: string,
  expireTime: string,
) => {
  return jwt.sign(payload, secret, {
    algorithm: 'HS256',
    expiresIn: expireTime,
  });
};

const verifyToken = (token: string, secret: Secret): JwtPayload => {
  return jwt.verify(token, secret) as JwtPayload;
};

export const jwtHelpers = {
  createToken,
  verifyToken,
};
