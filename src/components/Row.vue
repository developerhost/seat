<template>
  <v-container>
      <v-col v-for="i in changeWidth"
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

    computed: {
    // 算出 getter 関数
    changeWidth: {
      // `this` は vm インスタンスを指します
      get: function () {
        return Number(this.mathWidth);
      },
      // setter 関数
      set: function (newValue) {
        this.mathWidth = Number(newValue);
        console.log("setWidth",this.mathWidth)
      },
    },
  },

  // watch
  }
</script>
