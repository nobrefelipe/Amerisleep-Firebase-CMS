let state = {

    sizes:[],

    isLoggedIn: !!localStorage.getItem("TOKEN"),

    isLogging: false,

    isValid: true

};

export default state;