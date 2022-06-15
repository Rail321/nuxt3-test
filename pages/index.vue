<template>
  <div>
    <h1>Главная страница.</h1>

    <p>{{ counter }}</p>
  </div>
</template>

<script setup>
  const counter = useCounter()
</script>