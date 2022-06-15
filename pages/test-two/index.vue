<template>
  <div>
    <h1>Тест 2.</h1>

    <p>{{ counter }}</p>

    <button
      v-on:click="counter++"
    >
      <span>Добавить</span>
    </button>
  </div>
</template>

<script setup>
  const counter = useCounter()
</script>