<template>
  <div>
    <h1>Тест.</h1>

    <ul>
      <li>
        <p>
          <span>useA:</span>
          <span>{{ a }}</span>
        </p>
      </li>
      
      <li>
        <p>
          <span>useB:</span>
          <span>{{ b }}</span>
        </p>
      </li>
      
      <li>
        <p>
          <span>useC:</span>
          <span>{{ c }}</span>
        </p>
      </li>
      
      <li>
        <p>
          <span>useD:</span>
          <span>{{ d }}</span>
        </p>
      </li>
    </ul>

    <p>{{ counter }}</p>

    <button
      v-on:click="counter--"
    >
      <span>Отбавить</span>
    </button>
  </div>
</template>

<script setup>
  const a = useA()
  const b = useB()
  const c = useC()
  const d = useD()
  const counter = useCounter()
</script>