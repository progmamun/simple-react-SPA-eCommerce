# React simple eCommerce site

## Firebase

`npm install firebase`

- 1.  create a new firebase project in console.firebase.google.com
- 2.  npm install firebase
- 3.  create firebase.init.js and import getAuth to export auth
- 4.  Firebase settings > Authentication > enable Email and password auth
- 5.  Create Login, Sign up component, setup route
- 6.  Attach form field handler and form submit handler
- 7.  npm install --save react-firebase-hooks
- 8.  useCreateUserWithEmailAndPassword from react-firebase-hooks
- 9.  if user is created redirect to the expected page
- 10. useSignInWithEmailAndPassword for Login
- 11. Create RequireAuth component ==> check user exists also tract user location
- 12. In route wrap Protected Component by using Require Auth Component

* hosting step:
* `npm install -g firebase-tools`
* `firebase login`
* `firebase init`
* `firebase deploy`
