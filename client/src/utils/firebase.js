import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "aiinterview-bc146.firebaseapp.com",
  projectId: "aiinterview-bc146",
  storageBucket: "aiinterview-bc146.firebasestorage.app",
  messagingSenderId: "272541402232",
  appId: "1:272541402232:web:a9ce7baf160672ac3b598d",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };
