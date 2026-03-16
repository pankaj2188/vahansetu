// Give the service worker access to Firebase Messaging.
importScripts('https://www.gstatic.com/firebasejs/10.8.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.1/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker
// ⚠️ USE YOUR ACTUAL CONFIG FROM index.html HERE
firebase.initializeApp({
    apiKey: "AIzaSyBxxam2BQmpD3yQ79sI0-WS0dEuPXhldOo",
    authDomain: "vahansetu-d9ea9.firebaseapp.com",
    projectId: "vahansetu-d9ea9",
    storageBucket: "vahansetu-d9ea9.firebasestorage.app",
    messagingSenderId: "899743582502",
    appId: "1:899743582502:web:8de33754f6f216747899e7"
});

const messaging = firebase.messaging();

// This background listener handles the notification when the app is closed
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/favicon.ico', // You can add a VahanSetu icon later
    badge: '/favicon.ico',
    vibrate: [200, 100, 200] // Vibrate the phone
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
