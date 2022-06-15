<template>
  <app-input class="app-control-search"
    inputClass="app-control-search-input"
  >
    <div class="app-control-search-icon_search">
      <app-icon-search />
    </div>

    <div class="app-control-search-icon_arrow-right">
      <app-icon-arrow-right />
    </div>
  </app-input>
</template>

<style>
  .app-control-search-input {
    order: 2;
  }

  .app-control-search-input:focus ~ .app-control-search-icon_arrow-right svg path {
    stroke: #1EAEED;
    fill: #1EAEED;
  }
</style>

<style scoped>
  .app-control-search {
    height: 72px;
  }

  .app-control-search-icon_search, .app-control-search-icon_arrow-right {
    display: flex;
    align-items: center;
  }

  .app-control-search-icon_search {
    order: 1;
    padding-left: 32px;
  }
  
  .app-control-search-icon_arrow-right {
    order: 3;
    padding-right: 28px;
  }
</style>