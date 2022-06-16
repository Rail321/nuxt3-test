<template>
  <div>
    <app-input class="app-control-from"
      inputClass="app-control-from-input"
    >
      <div class="app-control-from-text"
        v-on:click="onClickText"
      >
        <span>от</span>
      </div>
    </app-input>
  </div>
</template>

<style>
  .app-control-from-input {
    order: 2;
  }

  .app-control-from-input {
    padding-left: 8px;
    padding-right: 8px;
    font-size: 16px;
    line-height: 19px;
  }
</style>

<style scoped>
  .app-control-from {
    height: 40px;
  }

  .app-control-from-text {
    display: flex;
    align-items: center;
  }

  .app-control-from-text {
    order: 1;
    padding-left: 12px;

    font-size: 16px;
    line-height: 19px;

    color: #414042;
    opacity: 0.5;

    cursor: text;
    user-select: none;
  }
</style>