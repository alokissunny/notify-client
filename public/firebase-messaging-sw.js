importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-messaging.js');
// importScripts('/__/firebase/init.js');
firebase.initializeApp({
    "apiKey": "AIzaSyA3_X0M3P0CPa6zX1YQ3-1N-RLQv8AnbY8",
    "appId": "1:1036200227238:web:09708c323c808a3c",
    "authDomain": "test-285b5.firebaseapp.com",
    "databaseURL": "https://test-285b5.firebaseio.com",
    "messagingSenderId": "1036200227238",
    "projectId": "test-285b5",
    "storageBucket": "test-285b5.appspot.com"
  });
  console.log('firebase initialised')
const messaging = firebase.messaging();


messaging.setBackgroundMessageHandler(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
      body: 'Background Message body.',
      icon: '/firebase-logo.png'
    };
  
    return self.registration.showNotification(notificationTitle,
      notificationOptions);
  });