<template>
  <div>
    <h1>Тест 6.</h1>

    <button
      v-bind:disabled="isBtnDisabled"
      v-on:click="onBtnClick"
    >
      <span>Отправить новый код</span>
      <span
        v-if="isBtnDisabled"
      >
        <span>&nbsp;</span>
        <span>{{ waiting }}</span>
      </span>
    </button>
  </div>
</template>

<script setup>
  const propsInterval = 5

  const interval = propsInterval * 1000

  const passed = ref( null )

  const isBtnDisabled = ref( false )

  const onBtnClick = () => {
    isBtnDisabled.value = true
    passed.value = interval

    const intervalId = setInterval( () => {
      const result = passed.value - 1000
      if ( result <= 0 ) {
        clearInterval( intervalId )
        isBtnDisabled.value = false
        passed.value = result
        return
      }
      passed.value = result
    }, 1000 )
  }

  const waiting = computed( () => {
    const s = Math.floor( passed.value / 1000 )
    const m = Math.floor( s / 60 )
    const totalS = s % 60
    const result = `${ m < 10 ? 0 : '' }${ m }:${ totalS < 10 ? 0 : '' }${ totalS }`
    return result
  } )
</script>