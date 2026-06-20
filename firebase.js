import { initializeApp } from
"https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
getDatabase,
ref,
set,
get,
update,
remove,
onValue
} from
"https://www.gstatic.com/firebasejs/12.0.0/firebase-database.js";

const firebaseConfig = {
apiKey: "AIzaSyA6lAK12nMeycCMG9Du12yTORr9l_r2_oQ",
authDomain: "recharge-system-2f338.firebaseapp.com",
databaseURL: "https://recharge-system-2f338-default-rtdb.asia-southeast1.firebasedatabase.app",
projectId: "recharge-system-2f338",
storageBucket: "recharge-system-2f338.firebasestorage.app",
messagingSenderId: "747381282812",
appId: "1:747381282812:web:eb47c4673d23d1cc490479"
};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

window.db = db;
window.ref = ref;
window.set = set;
window.get = get;
window.update = update;
window.remove = remove;
window.onValue = onValue;