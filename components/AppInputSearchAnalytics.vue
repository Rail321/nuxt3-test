<template>
  <app-input class="app-control-search-analytics"
    inputClass="app-control-search-analytics-input"
    placeholder="Филиал, дилер, отдел"
  >
    <div class="app-control-search-analytics-icon_search"
      v-on:click="onClickIconSearch"
    >
      <app-icon-search />
    </div>
  </app-input>
</template>

<style>
  .app-control-search-analytics-input {
    order: 2;
  }
</style>

<style scoped>
  .app-control-search-analytics-icon_search {
    display: flex;
    align-items: center;
  }

  .app-control-search-analytics-icon_search {
    order: 1;
    padding-left: 20px;

    cursor: text;
  }
</style>