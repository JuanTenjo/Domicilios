import * as firebase from 'firebase'

class Firebase {
    static init() {
        firebase.initializeApp({
            apiKey: "AIzaSyBqNoTfpjNQZ7zu8Kd-7Uonkad3e9bU7s4",
            authDomain: "domicilios-583a5.firebaseapp.com",
            databaseURL: "https://domicilios-583a5.firebaseio.com",
            projectId: "domicilios-583a5",
            storageBucket: "domicilios-583a5.appspot.com",
            messagingSenderId: "696912207591",
            appId: "1:696912207591:web:fdf752f5b1915eea160c42",
            measurementId: "G-N3W7L4DZ6H"
        });
    }
}
module.exports = Firebase