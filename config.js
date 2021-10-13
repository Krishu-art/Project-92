import firebase from 'firebase';
requestAnimationFrame('@firebase/firestore')


var firebaseConfig = {
  apiKey: "AIzaSyDIRF3ooK7HeQUwqwukLjGDTixL6Emwfxw",
  authDomain: "project-92-8c1de.firebaseapp.com",
  projectId: "project-92-8c1de",
  storageBucket: "project-92-8c1de.appspot.com",
  messagingSenderId: "743972871725",
  appId: "1:743972871725:web:927308ce624eec0bf0e2a4",
  measurementId: "G-K7R5HDXT51"
};

firebase.intializeApp(firebaseConfig);
export default firebase.firestore();

