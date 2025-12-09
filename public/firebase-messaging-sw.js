importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);
// // Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyD5zVi4f2APuBjSRxbfR2YABPk82mKVP0o",
  authDomain: "twiza-c5f35.firebaseapp.com",
  projectId: "twiza-c5f35",
  storageBucket: "twiza-c5f35.firebasestorage.app",
  messagingSenderId: "366039239266",
  appId: "1:366039239266:web:072b7f6f5c370484e0df3b",
  measurementId: "G-S25T7ZKV47"
};

firebase?.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase?.messaging();

messaging.onBackgroundMessage(function (payload) {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
