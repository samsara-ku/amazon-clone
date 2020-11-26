import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyBuTfFrztZit5RPJOmfPW2hRBEp2_j6VSA',
  authDomain: 'clone-62ed0.firebaseapp.com',
  databaseURL: 'https://clone-62ed0.firebaseio.com',
  projectId: 'clone-62ed0',
  storageBucket: 'clone-62ed0.appspot.com',
  messagingSenderId: '666245472780',
  appId: '1:666245472780:web:8ed85742907be798edc429',
  measurementId: 'G-H9LJ0Y6BW6',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }
