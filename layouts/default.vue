<template>
  <div>
    <h2>Часть общего лэйоута внутри которого рендерится страница.</h2>

    <div>
      <nuxt-link to="/">Главная</nuxt-link><span>&nbsp;</span><span>&nbsp;</span>
      <nuxt-link to="/test">Тест</nuxt-link><span>&nbsp;</span><span>&nbsp;</span>
      <nuxt-link to="/test-two">Тест 2</nuxt-link>
    </div>

    <div>
      <slot />
    </div>
  </div>
</template>