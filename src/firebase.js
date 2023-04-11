import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getStorage} from 'firebase/storage'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

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
const storage = getStorage(app);


async function uploadFileAndGetURL(file, name){
    try{
        const storageRef = ref(storage, `files/${auth.currentUser.uid}/${name}`);
        const snapshot = await uploadBytesResumable(storageRef, file);
        const url = await getDownloadURL(snapshot.ref);
        console.log('Success: file url =>', url);
        return url;
    } catch(err){
        console.error('Error: uploading file =>', err);
        return false;
    }
}

export {auth, storage, uploadFileAndGetURL};