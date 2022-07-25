import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA4o-Ra8wloC9ZjqX4uPJLf11FxssutFcM",
  authDomain: "health-info-app-22b13.firebaseapp.com",
  databaseURL: "https://health-info-app-22b13-default-rtdb.firebaseio.com",
  projectId: "health-info-app-22b13",
  storageBucket: "health-info-app-22b13.appspot.com",
  messagingSenderId: "248691975383",
  appId: "1:248691975383:web:8ca5e324cea4bb6e003c92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
