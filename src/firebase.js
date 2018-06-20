
import Firebase from 'firebase';


// Initialize Firebase
let config = {

     apiKey: "AIzaSyDVtDRcmQWg4kRhvcgMRHg_GuZunZnY81s",
     authDomain: "amerisleep-cms.firebaseapp.com",
     databaseURL: "https://amerisleep-cms.firebaseio.com",
     projectId: "amerisleep-cms",
     storageBucket: "amerisleep-cms.appspot.com",
     messagingSenderId: "1008114877802"

};

let firebaseApp = Firebase.initializeApp(config);



firebaseApp.auth().onAuthStateChanged( firebaseUser => {

    if(firebaseUser){

        firebaseUser.getIdToken(/* force refresh */true).then(token => {

            if(token){

                console.log('LOGGED IN');

                localStorage.setItem('TOKEN', token);

            }

        });

    }else{

        console.log('LOGGED OUT');

    }

});


export default firebaseApp;