// Firebase SDKs (ONLY ONE VERSION)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// 🔥 Firebase config (ONLY ONCE)
const firebaseConfig = {
  apiKey: "AIzaSyBTKgLPAYih4WTFPrTd26OLXS9m-c",
  authDomain: "igdtuwcareersprint.firebaseapp.com",
  projectId: "igdtuwcareersprint",
  storageBucket: "igdtuwcareersprint.appspot.com",
  messagingSenderId: "935549182645",
  appId: "1:935549182645:web:980ac5a59d385129e594fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ✅ Function called from login.html
window.saveVisitor = async function (username, branch) {
  try {
    await addDoc(collection(db, "visitors"), {
      username: username,
      branch: branch,
      time: new Date()
    });

    // redirect after save
    window.location.href = "index.html";

  } catch (error) {
    console.error(error);
    alert("Error saving data");
  }
};
