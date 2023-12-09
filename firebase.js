import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getDatabase, ref, set,update,onValue} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyA47bsiQzHe-n1K0FomyaMR23RerYBclhA",
    authDomain: "agri-robot-d7d14.firebaseapp.com",
    projectId: "agri-robot-d7d14",
    storageBucket: "agri-robot-d7d14.appspot.com",
    messagingSenderId: "912033966529",
    appId: "1:912033966529:web:747eca16bfa30275ebe740",
    measurementId: "G-B2MMLMF14J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);  

export{database, ref, set, update, onValue};