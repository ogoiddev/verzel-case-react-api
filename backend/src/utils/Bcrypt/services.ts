/* eslint-disable import/no-import-module-exports */
import bcrypt from 'bcrypt';
import { ErrorTypes } from '../../errors/catalog';

export const cryptPassword = (password: string) => {
  const salt = bcrypt.genSaltSync(5);
  return bcrypt.hashSync(password, salt);
};

export const checkPassword = (password: string, passwordDb: string) => {
  const isMatch = bcrypt.compareSync(password, passwordDb);
  if (!isMatch) throw Error(ErrorTypes.InvalidPasswordBcrypt);
};
