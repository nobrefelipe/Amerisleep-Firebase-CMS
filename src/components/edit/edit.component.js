import Vue from "vue";
import db from "../../db";
import VueFire from "vuefire";
import ratingComponent from '../shared/rating.vue';

Vue.use(VueFire);

export default {

  name: 'edit',

  components:{ ratingComponent },

  data(){

    return{

      saved: false,

      product: this.$route.params.product,

      token: localStorage.getItem('TOKEN'),

      content:{
        title: "",
        firmness: "",
        body: "",
        price: "",
        promo: ""
      },

      size: {
        name: "Twin",
        size: "38\" x 74\"",
        price: "",
        promo: ""
      }

    }

  },

  firebase() {
    return {

      // Get the sizes
      DB_SIZES: db.ref(this.product + '/sizes'),

      // Get the content
      DB_CONTENT: {

        source: db.ref(this.product + '/content'),

        // Assign the result to our local variables
        readyCallback: function (res) {

          this.content.title = res.val().title;
          this.content.firmness = res.val().firmness;
          this.content.body = res.val().body;
          this.content.price = res.val().price;
          this.content.promo = res.val().promo;

        }

      }

    }
  },


  computed:{

    store_sizes(){

      return this.$store.state.sizes;

    }

  },


  methods:{

    // Reorder items . not being used
    reorder ({oldIndex, newIndex}) {

      const movedItem = this.sizes.splice(oldIndex, 1)[0];

      this.sizes.splice(newIndex, 0, movedItem);

    },


    updateStore(){

      // dispatch ACTION to UPDATE the SIZES in the STORE
      this.$store.dispatch('add_new_size');

    },

    onSubmitContent(){

      this.$firebaseRefs.DB_CONTENT.set(this.content);

      this.savedFeedback();

    },

    onAddSize(){

      // Push the new size item
      this.$firebaseRefs.DB_SIZES.push(this.size);

      // Reset the fields
      this.size.name = "Twin";
      this.size.size = "38\" x 74\"";
      this.size.price = "";
      this.size.promo = "";

      // Focus on the size name again
      document.getElementById("sizeName").focus();

    },

    onDelete(item){

      if(confirm("Are you sure you want to DELETE this item?")){
        this.$firebaseRefs.DB_SIZES.child(item['.key']).remove();
      }

    },

    updateSizeAttribute(item, value, attribute){

      this.$firebaseRefs.DB_SIZES.child(item['.key']).child(attribute).set(value);

    },

    savedFeedback(){

      var vm = this;

      this.saved = true;

      setTimeout(function () {

        vm.saved = false;

      }, 1200)

    },

    updateName: function (item, newName) {

      this.$firebaseRefs.DB_SIZES.child(item['.key']).child('name').set(newName);

      //this.updateStore();

    },

    updateSize: function (item, newSize) {

      this.$firebaseRefs.DB_SIZES.child(item['.key']).child('size').set(newSize);

      //this.updateStore();

    },

    updateSizePrice: function (item, newSizePrice) {

      this.$firebaseRefs.DB_SIZES.child(item['.key']).child('price').set(newSizePrice);

      //this.updateStore();

    },



  }

}