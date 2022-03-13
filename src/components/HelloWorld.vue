<template>
  <v-container>
    <v-row class="row" v-for="i in reversedMessage" :key="i">
      <Row :mathWidth="mathWidth" />
    </v-row>

    <h2>条件</h2>

    <v-row>
      <p>横</p>
      <v-text-field v-model="mathWidth"> </v-text-field>

      <p>縦</p>
      <v-text-field v-model="mathHeight"> </v-text-field>
    </v-row>
  </v-container>
</template>

<script>
import Row from "./Row.vue";

export default {
  components: {
    Row,
  },
  name: "HelloWorld",

  data: () => ({
    items: "",
    mathWidth: 4,
    mathHeight: 4,
  }),

  computed: {
    // 算出 getter 関数
    reversedMessage: {
      // `this` は vm インスタンスを指します
      get: function () {
        return Number(this.mathHeight);
      },
      // setter 関数
      set: function (newValue) {
        this.mathHeight = Number(newValue);
        console.log("set",this.mathHeight)
      },
    },
  },
    methods: {
      getHeight: function() {
        return Number(this.mathWidth)
      }
    },

  watch: {
    mathHeight: function() {
      this.getHeight();
    }
    
  }
};
</script>

<style scoped>
.row .container {
  display: flex;
}
</style>
