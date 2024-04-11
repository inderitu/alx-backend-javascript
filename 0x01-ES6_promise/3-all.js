import { uploadPhoto, createUser } from './utils.js';

export default async function handleProfileSignup() {
  return createUser()
    .then(async ({ firstName, lastName }) => uploadPhoto()
      .then(({ body }) => {
        console.log(`${body} ${firstName} ${lastName}`);
      }))
    .catch(() => console.log('Signup system offline'));
}
