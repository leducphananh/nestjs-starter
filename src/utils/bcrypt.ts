import * as bcrypt from 'bcrypt';

export const encodePassword = (rawPassword: string) => {
  const salt = bcrypt.genSaltSync();
  return bcrypt.hashSync(rawPassword, salt);
};

export const comparePasswords = (
  rawPassword: string,
  hashedPassword: string,
) => {
  return bcrypt.compareSync(rawPassword, hashedPassword);
};
