import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([createUser(), uploadPhoto()])
    .then((d) => console.log(`${d[1].body} ${d[0].firstName} ${d[0].lastName}`))
    .catch(() => console.log('Signup system offline'));
}
