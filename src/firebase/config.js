import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDJIJdLnS-4NhaIxZq4EjIt90QIB9A0Y7Y",
  authDomain: "yelp-d9f36.firebaseapp.com",
  databaseURL: "https://yelp-d9f36-default-rtdb.firebaseio.com",
  projectId: "yelp-d9f36",
  storageBucket: "yelp-d9f36.appspot.com",
  messagingSenderId: "795484477773",
  appId: "1:795484477773:web:2318dcb542286c3af27f04"
};


const app = initializeApp(firebaseConfig);
export default app;

export const db = getFirestore(app);
