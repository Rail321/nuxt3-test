<template>
  <div>
    <h1>Тест 5.</h1>

    <div class="filter" style="width: 90%;">
      <div v-for="item of items" v-bind:key="item.id">
        <a href="javascript:void(0)" style="display: inline-block; background-color: silver;"
          v-bind:style="{ width: `${ item.width }%`, height: `${ item.height }px` }"
          v-bind:ref="`item-${ item.id }`"
          v-on:click="showTail( `item-${ item.id }` )"
        >
          <span>{{ item.text }}</span>
        </a>
      </div>

      <div class="filter-tail"
        ref="tail"
        v-bind:class="{ 'visibility-visible': isTailVisible }"
      >
        <button class="filter-submit"
          v-on:click="hideTail"
        >Применить</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() { return {
      isTailVisible: false,
      items: []
    } },

    methods: {
      showTail( ref ) {
        this.isTailVisible = true

        const target = this.$refs[ ref ][ 0 ]
        const {
          clientHeight: targetHeight,
          clientWidth: targetWidth,
          offsetTop: targetOffsetTop
        } = target
        
        const tail = this.$refs.tail
        tail.style.height = `${ targetHeight }px`
        tail.style.transform = `translate(${ targetWidth }px, ${ targetOffsetTop }px)`
      },
      
      hideTail() {
        this.isTailVisible = false
      }
    },

    mounted() {
      for ( let i = 1; i <= 10; i++ ) {
        const item = {
          id: i,
          text: `Item ${ i }`,
          width: 50 + i % 2 * 5,
          height: 20 + i
        }

        this.items.push( item )
      }
    }
  }
</script>

<style scoped>
  .filter {
    position: relative;
  }
  
  .filter-tail {
    position: absolute;
    top: 0;
    left: 0;

    visibility: hidden;

    display: flex;
    align-items: center;
    margin-left: 10px;
    margin-right: 10px;
  }

  .visibility-visible {
    visibility: visible;
  }
</style>