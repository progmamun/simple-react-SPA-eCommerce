// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAZ0vkvrZFarfUy6mQYpARrQgjuyHCbDqM',
  authDomain: 'simple-react-ecommerce-efd9d.firebaseapp.com',
  projectId: 'simple-react-ecommerce-efd9d',
  storageBucket: 'simple-react-ecommerce-efd9d.appspot.com',
  messagingSenderId: '364322590996',
  appId: '1:364322590996:web:f1556930f84aceb711b201',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
