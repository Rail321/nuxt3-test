<template>
  <div>
    <h1>Тест 7.</h1>

    <div style="display: flex;">
      <input
        v-for="itemIdx of count"
        v-bind:key="itemIdx"
        v-bind:ref="`item${ itemIdx }`"
        v-bind:value="modelValue[ itemIdx - 1 ] && itemProtectionList[ itemIdx - 1 ] ? '&lowast;' : modelValue[ itemIdx - 1 ]"
        v-bind:class="{ 'public': !itemProtectionList[ itemIdx - 1 ] && modelValue[ itemIdx - 1 ], 'protected': modelValue[ itemIdx - 1 ] && itemProtectionList[ itemIdx - 1 ] }"
        v-on:focus="onFocus"
        v-on:input="onInput"
        v-on:keydown="onKewDown"
      />
    </div>
  </div>
</template>

<script setup>
  const count = 4

  const instance = getCurrentInstance()
  
  const modelValue = ref( [] )

  const idx = ref( modelValue.value.length )

  const item1 = ref( null )
  const item2 = ref( null )
  const item3 = ref( null )
  const item4 = ref( null )

  const itemList = [ item1, item2, item3, item4 ]

  const itemProtectionList = ref( itemList.map( () => false ) )

  const next = () => idx.value = ( idx.value + 1 ) >= count ? count - 1 : idx.value + 1
  const prev = () => idx.value = idx.value <= 0 ? 0 : idx.value - 1

  const reFocus = () => {
    const targetInput = itemList[ idx.value ].value[ 0 ]
    targetInput.focus()
    targetInput.select()
  }

  const isCorrectInput = value => value !== ' ' && !isNaN( value )

  const onFocus = () => {
    reFocus()
  }

  const onInput = event => {
    const type = event.inputType
    const value = event.data
    const targetIdx = itemList.findIndex( item => item.value[ 0 ] === event.target )

    if ( type === 'insertText' ) {
      if ( isCorrectInput( value ) ) {
        modelValue.value[ targetIdx ] = value
        itemProtectionList.value[ targetIdx ] = false
        setTimeout( () => itemProtectionList.value[ targetIdx ] = true, 350 )
        next()
      }
    }
    
    if ( type === 'deleteContentBackward' ) {
      modelValue.value.pop()
      itemProtectionList.value[ targetIdx ] = false
      prev()
    }

    reFocus()
    instance.ctx.$forceUpdate()
  }

  const onKewDown = event => {
    if ( [ 37, 38, 39, 40 ].includes( event.keyCode ) ) event.preventDefault()
  }
</script>

<style scoped>
  input {
    outline: none;
    border: none;

    margin-left: 4px;
    margin-right: 4px;

    width: 40px;
    height: 60px;

    background-color: #EDEEEF;
    border-radius: 2px;

    text-align: center;

    font-family: 'Gilroy';
    font-style: normal;
    
    font-weight: 300;
    font-size: 30px;
    line-height: 44px;
    color: #414042;

    caret-color: transparent;
  }

  input::selection {
    background-color: transparent;
  }

  input.public {
    background-color: #1EAEED;

    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #FFF;
  }

  input.protected {}
</style>