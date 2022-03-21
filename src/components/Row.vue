<template>
  <v-container class="py-2">
      <v-col class="pa-0" justify="center" v-for="i in changeWidth"
      :key="i">

      <Cell :id="rowId + '_' + i" :ref="rowId+'_'+i">
        {{rowId+"_"+i}}
      </Cell>
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
      },
      rowId: {
        type: Number,
        required: true
      },
      propRandomId: {
        type: String,
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

    watch: {
      propRandomId: function () {
        
        for(let i = 0; i < this.mathWidth; i++){
          this.$refs[this.rowId+"_"+(i+1)][0].$el.children[0].style.backgroundColor="lightgray";
        }
        
        if(!this.$refs[this.propRandomId]){
          return
        }

        this.$refs[this.propRandomId][0].$el.children[0].style.backgroundColor="red";
      
      },
      
    },

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
