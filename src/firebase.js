import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDYUiFbTkMZLEd_xtxW9bOznok0lW4i-IM",
    authDomain: "social-media-cm.firebaseapp.com",
    projectId: "social-media-cm",
    storageBucket: "social-media-cm.appspot.com",
    messagingSenderId: "428842895639",
    appId: "1:428842895639:web:c4a1771b724fae235a0f52"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;