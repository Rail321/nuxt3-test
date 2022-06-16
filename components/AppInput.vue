<template>
  <label class="app-control">
    <input class="app-control-input"
      v-bind:value="modelValue"
      v-on:input="onInput"
      v-bind:type="type"
      v-bind:placeholder="placeholder"
      v-bind:class="inputClass"
    >
    <div class="app-control-mimic"></div>
    <slot />
  </label>
</template>

<script setup>
  defineProps( {
    modelValue: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
    inputClass: {
      type: String,
      default: ''
    }
  } )

  const emit = defineEmits( [ 'update:modelValue' ] )

  const onInput = event => emit( 'update:modelValue', event.target.value )
</script>

<style>
  .app-control {
    position: relative;
    overflow: hidden;
    display: flex;
    height: 60px;
    border-radius: 2px;
  }

  .app-control-input {
    display: block;
    width: 100%;
    height: 100%;
    padding-left: 20px;
    padding-right: 20px;

    font-size: 18px;
    line-height: 21px;
    color: #414042;

    background-color: transparent;
    border: none;
    border-radius: 2px;
  }

  .app-control-input::selection{
    background-color: #D9D9D9;
  }

  .app-control-input::-moz-selection{
    background-color: #D9D9D9;
  }

  .app-control-input::placeholder {
    color: #8A8A8D;
  }

  .app-control-mimic {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;

    background-color: #EDEEEF;
    border: 2px solid #EDEEEF;
    border-radius: 2px;
  }

  .app-control-input:focus ~ .app-control-mimic {
    background-color: transparent;
    border-color: #414042;
  }

  .app-control > *:not( .app-control-mimic ) {
    position: relative;
    z-index: 2;
  }
</style>