import { sign, verify } from 'jsonwebtoken';

export function signToken(payload) {
  const token = sign(payload, process.env.SECRET_KEY_TOKEN, {
    expiresIn: '1d',
  });
  return token;
}

export function verifyToken(token) {
  const decodeToken = verify(token, process.env.SECRET_KEY_TOKEN);
  return decodeToken;
}
