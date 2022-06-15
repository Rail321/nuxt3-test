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
      <div class="app-control-search-wrapper">
        <app-input-search />
      </div>
    </div>

    <br />

    <div>
      <div class="app-control-counter-wrapper">
        <app-input-counter />
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
  .app-control-search-wrapper,
  .app-control-counter-wrapper {
    max-width: 100%;
  }

  .app-control-wrapper {
    width: 398px;
  }

  .app-control-search-wrapper {
    width: 590px;
  }

  .app-control-counter-wrapper {
    width: 100px;
  }
</style>