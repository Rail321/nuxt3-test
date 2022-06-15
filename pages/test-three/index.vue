<template>
  <div>
    {{ todoList }}
  </div>
</template>

<script setup>
  const { data: todoList } = useAsyncData( 'todoList', () => $fetch( 'https://jsonplaceholder.typicode.com/todos?_limit=7' ) )
</script>