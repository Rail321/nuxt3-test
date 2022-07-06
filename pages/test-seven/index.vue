<template>
  <div>
    <h1>Тест 7.</h1>

    <div>
      <input type="number" placeholder="*" style="width: 30px; height: 50px; margin: 0 3px;"
        ref="fieldOne"
        v-on:focus="onFocus"
        v-bind:value="modelValue[ 0 ]"
        v-on:input="onInput"
      >
      <input type="number" placeholder="*" style="width: 30px; height: 50px; margin: 0 3px;"
        ref="fieldTwo"
        v-on:focus="onFocus"
        v-bind:value="modelValue[ 1 ]"
        v-on:input="onInput"
      >
      <input type="number" placeholder="*" style="width: 30px; height: 50px; margin: 0 3px;"
        ref="fieldThree"
        v-on:focus="onFocus"
        v-bind:value="modelValue[ 2 ]"
        v-on:input="onInput"
      >
      <input type="number" placeholder="*" style="width: 30px; height: 50px; margin: 0 3px;"
        ref="fieldFour"
        v-on:focus="onFocus"
        v-bind:value="modelValue[ 3 ]"
        v-on:input="onInput"
      >

      <p>{{ modelValue }}</p>
    </div>
  </div>
</template>

<script setup>
  const instance = getCurrentInstance()

  const fieldOne = ref( null )
  const fieldTwo = ref( null )
  const fieldThree = ref( null )
  const fieldFour = ref( null )

  const modelValue = ref( [] )

  const fields = [ fieldOne, fieldTwo, fieldThree, fieldFour ]

  const onFocus = () => {}

  const onInput = event => {
    const type = event.inputType
    const value = event.target.value

    console.log( type )
    console.log( event.data )

    if ( type === 'insertText' ) {
      if ( modelValue.value.length !== 4 ) {
        modelValue.value.push( event.data )
        modelValue.value = modelValue.value.slice( 0, 4 )
      } else {
        modelValue.value[ 3 ] = event.data
      }
    }

    if ( type === 'deleteContentBackward' ) {
      modelValue.value.length = modelValue.value.length - 1
    }

    const idx = modelValue.value.length - 1
    fields[ idx >= 0 ? idx : 0 ].value.focus()

    instance.ctx.$forceUpdate()
  }
</script>

<style scoped>
  input {
    text-align: center;
  }

  input, input::placeholder {
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 300;
    font-size: 38px;
    line-height: 44px;
    color: #414042;
  }

  input {
    font-weight: 500;
    font-size: 24px;
    line-height: 44px;
    color: #FFFFFF;
    color: #414042;
  }

  input::placeholder {
    font-weight: 300;
    font-size: 38px;
    line-height: 44px;
    color: #414042;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=number] {
    -moz-appearance: textfield;
  }
</style>