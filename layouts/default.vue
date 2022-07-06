<template>
  <div>
    <h2>Часть общего лэйоута внутри которого рендерится страница.</h2>

    <div>
      <nuxt-link to="/">Главная</nuxt-link><span>&nbsp;</span><span>&nbsp;</span>
      <nuxt-link to="/test">Тест</nuxt-link><span>&nbsp;</span><span>&nbsp;</span>
      <nuxt-link to="/test-two">Тест 2</nuxt-link><span>&nbsp;</span><span>&nbsp;</span>
      <nuxt-link to="/test-three">Тест 3</nuxt-link><span>&nbsp;</span><span>&nbsp;</span>
      <nuxt-link to="/test-four">Тест 4</nuxt-link><span>&nbsp;</span><span>&nbsp;</span>
      <nuxt-link to="/test-five">Тест 5</nuxt-link>
    </div>

    <div>
      <slot />
    </div>
  </div>
</template>