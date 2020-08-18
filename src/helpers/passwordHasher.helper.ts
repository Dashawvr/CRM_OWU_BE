import {compare, hash, hashSync} from 'bcrypt';

export const HASH_PASSWORD = (password: string): Promise<string> => hash(password, 10);
export const HASH_PASSWORD_SYNC = (password: string): string => hashSync(password, 10);
export const CHECK_HASH = (password: string, hashedPass: string): Promise<boolean> => compare(password, hashedPass);
