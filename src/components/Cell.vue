<template>
  <v-container justify="center" class="pa-0 ma-0">
        <v-card
          class="px-0 py-2 mx-2"
          tile
          outlined
          elevation="2"
          height="5vh"
        >
        <div style="display:flex; justify-content: center; align-items: center;">
          {{rowCellId}}_{{colCellId}}

        </div>
        </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Cell",

  props: {
      rowCellId: {
        type: Number,
        required: true
      },
      colCellId: {
        type: Number,
        required: true
      },
  },

  data: () => ({
    // rowId: 0,
    // colId: 0
  }),
  computed: {
      height () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return 50
          case 'sm': return 60
          case 'md': return 70
          case 'lg': return 80
          case 'xl': return 90
        }
        return true
      },
      displayRowId () {
        console.log(this.rowCellId);
        
        return this.rowCellId;
      }
    },
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
