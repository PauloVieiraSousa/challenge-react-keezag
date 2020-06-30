import { SignIn } from '../../enums/signin.enums';
import { users } from '../../mock/user.mock';

function searchUser({ user, password }) {
  return users.find(
    (item) =>
      (item.email === user || item.user === user) && item.password === password
  );
}

export function signin(data) {
  const user = searchUser(data);
  return user
    ? { type: SignIn.SUCCESS, data: { user } }
    : { type: SignIn.FAILURE, error: 'Usuario ou email incorreto' };
}
