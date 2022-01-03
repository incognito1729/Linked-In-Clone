import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// import {auth} from 'firebase'


const firebaseConfig = {
  apiKey: "AIzaSyBorZ0_Tf8DSWOTvOUENF38Xgy9tm3rQXU",
  authDomain: "linkedin-clone-fa680.firebaseapp.com",
  projectId: "linkedin-clone-fa680",
  storageBucket: "linkedin-clone-fa680.appspot.com",
  messagingSenderId: "137983994835",
  appId: "1:137983994835:web:41d707ae686b2903b41d26",
  measurementId: "G-8HFR13CMCN"
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(app);
const auth=firebase.auth();
export{db,auth};