<template>
  <v-container justify="center" class="pa-0 ma-0">
        <v-card
          class="px-0 py-2 mx-2"
          tile
          outlined
          elevation="2"
          height="10vh"
          widht="10vw"
          max-height="60"
          max-width="60"
        >
        </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Cell",

  data: () => ({
    // rowId: 0,
    // colId: 0
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
