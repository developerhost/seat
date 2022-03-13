<template>
  <v-container>
      <div class="cellBox"></div>
  </v-container>
</template>

<script>
export default {
  name: "Cell",

  data: () => ({
    rowId: 0,
    colId: 0
  }),
};
</script>

<style scoped>
.cellBox {
  width: 100px;
  height: 100px;
  margin: 5px;
  padding: 10px;
  border: 1px solid black;
  background-color: lightgray;
}
</style>
