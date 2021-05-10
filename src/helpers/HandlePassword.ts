import { compare, genSalt, hash } from 'bcrypt';

const hashPassword = async (password) => {
  const salt = await genSalt(10);
  const hashed = await hash(password, salt);
  return hashed;
};

const comparePassword = (input, hashed) => {
  const checkPassword = compare(input, hashed);
  return checkPassword;
};

export { hashPassword, comparePassword };
