<template>
  <div class="app-test-four">
    <h1>Тест 4.</h1>

    <div>
      <div class="app-control-wrapper">
        <app-input
          v-model="input1"
          v-bind:type="'text'"
          v-bind:placeholder="'ФИО'"
        />
      </div>
    </div>

    <br />

    <div>
      <div class="app-control-search-product-wrapper">
        <app-input-search-product />
      </div>
    </div>

    <br />

    <div>
      <div class="app-control-from-wrapper">
        <app-input-from />
      </div>
    </div>

    <br />

    <div>
      <div class="app-control-counter-wrapper">
        <app-input />
      </div>
    </div>

    <br />

    <div>
      <div class="app-control-wrapper">
        <app-input-password />
      </div>
    </div>

    <br />

    <div>
      <div class="app-control-wrapper">
        <app-input-phone />
      </div>
    </div>

    <br />

    <div>
      <div class="app-control-search-analytics-wrapper">
        <app-input-search-analytics />
      </div>
    </div>
  </div>
</template>

<script setup>
  const input1 = useState( 'input1', () => '' )
</script>

<style>
  @import url("https://cdn.rawgit.com/mfd/09b70eb47474836f25a21660282ce0fd/raw/e06a670afcb2b861ed2ac4a1ef752d062ef6b46b/Gilroy.css");

  .app-test-four {
    font-family: 'Gilroy', sans-serif;
    font-style: normal;
    font-weight: 500;
  }

  .app-test-four * {
    box-sizing: border-box;
  }

  .app-test-four input {
    outline: none;
  }

  .app-control-wrapper,
  .app-control-search-product-wrapper,
  .app-control-from-wrapper,
  .app-control-counter-wrapper,
  .app-control-search-analytics-wrapper {
    max-width: 100%;
  }

  .app-control-wrapper {
    width: 398px;
  }

  .app-control-search-product-wrapper {
    width: 590px;
  }

  .app-control-from-wrapper {
    width: 100px;
  }

  .app-control-counter-wrapper {
    width: 70px;
  }

  .app-control-search-analytics-wrapper {
    width: 285px;
  }
</style>