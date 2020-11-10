import firebase from 'firebase/app';
/* eslint-disable-next-line */
import firestore from 'firebase/firebase-firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCZLrlAVsB4JM9F-OjAT_AAvNd3iuDCaT8',
  authDomain: 'devrik-backend.firebaseapp.com',
  databaseURL: 'https://devrik-backend.firebaseio.com',
  projectId: 'devrik-backend',
  storageBucket: 'devrik-backend.appspot.com',
  messagingSenderId: '750781963720',
  appId: '1:750781963720:web:b34a2d3ef8cda8e5ee74fd',
};

const app = firebase.initializeApp(firebaseConfig);
const store = app.firestore();

export default store;
