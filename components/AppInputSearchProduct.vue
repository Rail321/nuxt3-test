<template>
  <app-input class="app-control-search-product"
    inputClass="app-control-search-product-input"
  >
    <div class="app-control-search-product-icon_search"
      v-on:click="onClickIconSearch"
    >
      <app-icon-search />
    </div>

    <div class="app-control-search-product-icon_arrow-right"
      v-on:click.prevent
    >
      <app-icon-arrow-right />
    </div>
  </app-input>
</template>

<style>
  .app-control-search-product-input {
    order: 2;
  }

  .app-control-search-product-input:focus ~ .app-control-search-product-icon_arrow-right svg path {
    stroke: #1EAEED;
    fill: #1EAEED;
  }
</style>

<style scoped>
  .app-control-search-product {
    height: 72px;
  }

  .app-control-search-product-icon_search, .app-control-search-product-icon_arrow-right {
    display: flex;
    align-items: center;
  }

  .app-control-search-product-icon_search {
    order: 1;
    padding-left: 32px;

    cursor: text;
  }
  
  .app-control-search-product-icon_arrow-right {
    order: 3;
    padding-right: 28px;
  }
</style>