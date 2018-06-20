
import router from '../router';
import firebaseApp from '../firebase';
const AUTH = firebaseApp.auth();

let actions = {

    // CREATE NEW USER
    sigup( { commit }, creds) {

        AUTH.createUserWithEmailAndPassword(creds.email, creds.password)
            .then( user =>{

                user.updateProfile({'displayName': document.getElementById("username").value});

                console.log(document.getElementById("username").value);

                //SEND EMAIL VERIFICATION
                user.sendEmailVerification().then(function() {

                    console.log('email sent');

                }, function(error) {

                    console.log(error);

                });


            })
            .catch( e => {

                console.log(e.message);

            })

    },


    // LOGIN
    login( { commit }, creds) {

        AUTH.signInWithEmailAndPassword(creds.email, creds.password)

            .then( user => {

                // CHECK IF USER IS VERIFIED
                if(user.emailVerified !== false){

                    // Show loading
                    commit('LOGGING');

                    //lets fake a timeout [ remove in prod ]
                    setTimeout(function () {

                        //redirect to main view
                        router.push('/amerisleep-cms');

                        commit('LOGIN');

                    }, 1000)

                }else{

                    console.log("USER NOT VERIFIED: CHECK EMAIL");

                }


            })
            .catch( e => {

                //console.log(e);

                commit('VALIDATION');

            });

    },


    // LOGOUT
    logout( { commit } ){

        // Logout
        AUTH.signOut();

        // Clear token
        localStorage.removeItem('TOKEN');

        //security improvement: force app refresh/redirect to login
        window.location.href= "/amerisleep-cms/login";

        commit('LOGOUT');

    },

    //
    // add_new_size( {commit} ){
    //
    //     Vue.http.get('as1/sizes.json').then( res => {
    //
    //         commit('ADD_NEW_SIZE', res.body)
    //
    //     });
    //
    // }

};

export default actions;