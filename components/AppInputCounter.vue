<template>
  <app-input class="app-control-counter"
    inputClass="app-control-counter-input"
  >
    <div class="app-control-counter-text">
      <span>от</span>
    </div>
  </app-input>
</template>

<style>
  .app-control-counter-input {
    order: 2;
  }

  .app-control-counter-input {
    font-size: 16px;
    line-height: 19px;
    padding-left: 8px;
    padding-right: 8px;
  }
</style>

<style scoped>
  .app-control-counter {
    height: 40px;
  }

  .app-control-counter-text {
    display: flex;
    align-items: center;
  }

  .app-control-counter-text {
    order: 1;
    padding-left: 12px;
    font-size: 16px;
    line-height: 19px;
    color: #414042;
    opacity: 0.5;
  }
</style>