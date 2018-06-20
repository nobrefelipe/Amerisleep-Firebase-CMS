<template lang="html">

  <div class="rating-component is-flexy is-middle">


      <div class="stars" :style="{width: calculateSize, marginRight: difference}"></div>
      <div class="rating-info" style="float: right;">{{ data.score }}</div>
      <div class="title">{{ data.title}}</div>

  </div>

</template>

<script lang="js" type="text/javascript">

  export default  {

    name: 'rating-component',

    props: ['data'],

    computed:{

        calculateSize(){

            return this.data.score * 70 / 5 + 'px';

        },

        difference(){

          return 70 - this.data.score * 70 / 5 + 'px';

        }

    }

  }
</script>

<style scoped lang="scss">

  .rating-component{

    float: left;

    .stars{

      position: relative;
      float: left;
      width: 70px;
      height: 14px;


      &:before,
      &:after{

        content: '';
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        background-repeat: repeat-x;
        background-size: 14px;

      }


      //GREY STARS
      &:before{

        width: 70px;
        background-image: url("../../assets/star-grey.png");
        z-index:0;
      }

      //YELLOW STARS
      &:after{

        width: 100%;
        background-image: url("../../assets/star.png");
        z-index:10;
      }

    }

    .rating-info{

      float: left;
      color: #00338D;
      font-size: 13px;
      line-height: 15px;
      margin-left: 8px;
      margin-right: 8px;

    }


    .title{

      float: left;
      color: #00338D;
      font-size: 14px;
      font-weight: 500;
      line-height: 15px;

    }

  }

</style>
