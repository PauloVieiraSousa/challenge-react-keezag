import { users } from '../mock/user.mock';

export function signIn({ user, password }) {
  return new Promise((resolve, reject) => {
    const filtered = users.find((item) => {
      return (
        (item.user === user || item.email === user) &&
        item.password === password
      );
    });

    setTimeout(() => {
      if (filtered) {
        resolve({
          name: filtered.name,
          user: filtered.user,
          email: filtered.email,
          heroId: filtered.heroId
        });
      } else {
        reject({ message: 'User/Email or Passsword not found' });
      }
    }, 2000);
  });
}
