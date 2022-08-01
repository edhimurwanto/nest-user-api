import * as bcrypt from 'bcrypt';

const saltOrRounds = 10;

const hash = (text: string) => bcrypt.hash(text, saltOrRounds);

const compare = (text: string, hash: string) => bcrypt.compare(text, hash);

export default {
    hash,
    compare
}