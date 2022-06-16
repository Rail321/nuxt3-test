<template>
  <app-input
    inputClass="app-control-phone-input"
    v-bind:placeholder="'+7 (999) 999-99-99'"
  >
    <div class="app-control-phone-icon_search"
      v-on:click="onClickIconSearch"
    >
      <img src="assets/app-input-phone-icon.png" />
    </div>
  </app-input>
</template>

<style>
  .app-control-phone-input {
    order: 2;
    padding-left: 11px;
  }
</style>

<style scoped>
  .app-control-phone-icon_search {
    display: flex;
    align-items: center;
  }

  .app-control-phone-icon_search {
    order: 1;
    padding-left: 20px;

    cursor: text;
  }
</style>