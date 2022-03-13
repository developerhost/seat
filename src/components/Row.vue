<template>
  <v-container>
    
    
      <v-col v-for="i in mathWidth"
      :key="i">

      <Cell />
      </v-col>
      
    
  </v-container>
</template>

<script>
  import Cell from './Cell.vue'

  export default {
    props: {
      mathWidth: {
        type: Number,
        required: true
      }
    },
    components: {
      Cell
    },
    name: 'Row',

    data: () => ({
      items: "",
    }),

  //   computed: {
  //   // 算出 getter 関数
  //   reversedMessage: {
  //     // `this` は vm インスタンスを指します
  //     get: function () {
  //       return this.mathWidth;
  //     },
  //     // setter 関数
  //     set: function (newValue) {
  //       this.mathWidth = newValue;
  //     },
  //   },
  // },

  // watch
  }
</script>
