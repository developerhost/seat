<template>
  <v-container class="scroll">
    <v-row class="row" v-for="i in changeHeight" :key="i">
      <Row :mathWidth="mathWidth" />
    </v-row>

    <h2>条件</h2>

    <v-row>
      <p>横</p>
      <v-text-field v-model="mathWidth"> </v-text-field>

      <p>縦</p>
      <v-text-field v-model="mathHeight"> </v-text-field>
    </v-row>

    <v-row justify="center" class="pt-4">
      <v-btn depressed color="primary"> 指名 </v-btn>
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
    changeHeight: {
      // `this` は vm インスタンスを指します
      get: function () {
        return Number(this.mathHeight);
      },
      // setter 関数
      set: function (newValue) {
        this.mathHeight = Number(newValue);
        console.log("setHeight", this.mathHeight);
      },
    },
  },
  methods: {
    getHeight: function () {
      return Number(this.mathWidth);
    },
  },

  watch: {
    mathHeight: function () {
      this.getHeight();
    },
  },
};
</script>

<style scoped>
.row .container {
  display: flex;
}
.scroll {
  height: 100vh;
  overflow: scroll;
}
</style>
