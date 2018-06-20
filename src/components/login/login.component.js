import firebaseApp from '../../firebase';

const AUTH = firebaseApp.auth();

export default  {

  name: 'login',

  data() {
    return {

      creds: {
        email: '',
        password : ''
      }

    }
  },

  computed: {

    isLoggedIn() {

      return this.$store.state.isLoggedIn;

    },

    isValid() {

      return this.$store.state.isValid;

    },

    isLogging() {

      return this.$store.state.isLogging;

    }

  },

  mounted(){

    if(this.isLoggedIn){

      this.$router.push('/amerisleep-cms');

    }

  },

  methods: {

    onLogin(){

      this.$store.dispatch("login", this.creds);

    },

    onSignup(){

      this.$store.dispatch("sigup", this.creds);
    },

   
  }


}

