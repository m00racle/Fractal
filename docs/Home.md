# Home
This is the documentation for developing the home.js
Here are specification for this page:
- I want SPA for this page
- If the user is not authenticated yet, then it shows the "Selamat Datang, Silahkan Sign In"
- If the user is authenticated AND exist in the Firestore collection then it shows "Selamat Datang, { username }
- If the user is authenticated BUT does not exist in Firestore collections `users` then it will be redirected to /register page which display "Silahkan Lengkapi Data"

## Test
Prepare the test (make sure you are on the root of the project folder)

1. install the firebase tools

```
npm install -g firebase-tools
```
This is already done since it is globally installed. To test:
```
firebase --version
```

2. Setup the concurrently lib:
```
npm install --save-dev concurrently
```

3. Set up Firebase Emulator suite
```
firebase init emulators
```
setup the emulators for Authentication and Firestore. 
Remember that the project ID in the console: refract-book.

4. modify package.json:
```json
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "npm run test:emulators",
  "test:emulators": "concurrently 'firebase emulators:start' 'react-scripts test'",
  "eject": "react-scripts eject"
}
```

## Build Test
Here is the code to initiate test:
```javascript
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import firebaseApp from '../firebase'; // assume the test in /src/__test__

beforeAll(() => {
  // Point the Firebase SDK to use emulators WRONG:
  ~firebaseApp.auth().useEmulator('http://localhost:9099')~; // check the port later
  firebaseApp.firestore().useEmulator('localhost', 8080); // check the port later
});

// here start the test:
test('Example test', () => {
  // your test here
}):
```