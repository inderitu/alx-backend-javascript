import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  return createUser()
    .then(async ({ firstName, lastName }) => uploadPhoto()
      .then(({ body }) => {
        console.log(body, firstName, lastName);
      }))
    .catch(() => console.log('Signup system offline'));
}
