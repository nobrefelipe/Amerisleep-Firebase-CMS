let  mutations = {


    LOGGING(state) {

        state.isLogging = true;

    },

    LOGIN(state) {

        state.isLogging = false;

        state.isLoggedIn = true;

    },

    LOGOUT(state) {

        state.isLoggedIn = false;

    },

    VALIDATION(state){

        state.isValid = false;

    },

    ADD_NEW_SIZE( state, obj){

        state.sizes = obj; //trey a merge with push?

    },

};

export default mutations;