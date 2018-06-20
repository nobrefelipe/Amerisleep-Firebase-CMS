
import firebaseApp from '../../firebase';

export default  {

  name: 'app-header',

  data() {
    return {

      username: firebaseApp.auth().currentUser.displayName
      
    }
  },

  mounted(){
    console.log( firebaseApp.auth().currentUser.displayName)
  },


  methods: {

    onSignout(){

      this.$store.dispatch("logout");

    }

  }

}

