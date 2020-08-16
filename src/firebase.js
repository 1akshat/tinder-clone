import firebase from "firebase";

const firebaseConfig = "<Your Firebase Config>";

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
