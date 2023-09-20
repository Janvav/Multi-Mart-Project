

import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCVhxi5E4F9fb3EziKQE60ueqCU6bL0Hu0",
  authDomain: "maltimart-c76b8.firebaseapp.com",
  projectId: "maltimart-c76b8",
  storageBucket: "maltimart-c76b8.appspot.com",
  messagingSenderId: "644034588594",
  appId: "1:644034588594:web:a24ed4666732416032beab"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app;