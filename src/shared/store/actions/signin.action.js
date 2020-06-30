import { SignIn } from '../../enums/signin.enums';
import { users } from '../../mock/user.mock';

function validateUser(data, user, password) {
  return (
    (data.email === user || data.user === user) && data.password === password
  );
}

function searchUser({ user, password }) {
  return users.find((item) => validateUser(item, user, password));
}

function success(user) {
  return { type: SignIn.SUCCESS, data: { user } };
}

function failure() {
  return { type: SignIn.FAILURE, error: 'Usuario ou email incorreto' };
}

export function signin(data) {
  const user = searchUser(data);
  return user ? success(user) : failure();
}
