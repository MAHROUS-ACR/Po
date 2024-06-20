// محتويات ملف firebase-messaging-sw.js

importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyCz-ydE1F9Gfm8_d6exEfq2hdSuZmQRSd4",
    authDomain: "bckacr-49e4c.firebaseapp.com",
    databaseURL: "https://bckacr-49e4c-default-rtdb.firebaseio.com",
    projectId: "bckacr-49e4c",
    storageBucket: "bckacr-49e4c.appspot.com",
    messagingSenderId: "646102338822",
    appId: "1:646102338822:web:a6de8a05e59aff3c736287",
    measurementId: "G-2MTRQT4H5M"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('Received background message ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.icon
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});