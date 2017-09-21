importScripts("https://www.gstatic.com/firebasejs/4.1.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/4.1.1/firebase-messaging.js");

firebase.initializeApp({
  messagingSenderId: "781706800672"
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  return self.registration.showNotification({}, {});
});
