// Import Firebase background libraries (compat versions are required for Service Workers)
importScripts("https://www.gstatic.com/firebasejs/10.8.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.8.1/firebase-messaging-compat.js");

// Your exact Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBxxam2BQmpD3yQ79sI0-WS0dEuPXhldOo",
    authDomain: "vahansetu-d9ea9.firebaseapp.com",
    projectId: "vahansetu-d9ea9",
    storageBucket: "vahansetu-d9ea9.firebasestorage.app",
    messagingSenderId: "899743582502",
    appId: "1:899743582502:web:8de33754f6f216747899e7"
};

// Initialize the background app
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// THIS IS THE MAGIC: What happens when the phone is locked
messaging.onBackgroundMessage((payload) => {
  console.log("Received background push: ", payload);
  
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "https://cdn-icons-png.flaticon.com/512/3208/3208726.png", // A nice alert icon
    badge: "https://cdn-icons-png.flaticon.com/512/3208/3208726.png",
    vibrate: [200, 100, 200, 100, 200, 100, 200] // Aggressive vibration pattern for urgency
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
