import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([createUser(), uploadPhoto()])
    .then(([user, photo]) => {
      console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
