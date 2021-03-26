let config = {
    apiKey: "AIzaSyCAgW-YvemiL6m69_Jn0HLX_oW7QvT3_qU",
    authDomain: "csci-4193.firebaseapp.com",
    projectId: "csci-4193",
    storageBucket: "csci-4193.appspot.com",
    messagingSenderId: "1045470185095",
    appId: "1:1045470185095:web:68ea3cfaebaf4965a51a22",
    measurementId: "G-12DYCXFL42"
};
// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(config);
    firebase.analytics();
}
