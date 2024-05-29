<script setup>
import { usePiniaStore } from "../store";
const store = usePiniaStore();
</script>

<template>
  <div :class="{ 'ninja-mode': store.ninjamode }">
    <LoadingEffect v-if="!store.transitionFinished" />
    <Nav
      class="position-fixed z-5 w-100"
      v-if="store.countWhileLoading === 0 && store.transitionFinished"
    />
    <main v-if="store.countWhileLoading === 0 && store.transitionFinished">
      <Header />
      <Projects />
      <SayHi />
      <Footer />
    </main>
  </div>
</template>

<style lang="scss" scoped>
div {
  overflow-x: hidden;
  scroll-behavior: smooth;
  background-color: #fcfcfc;
}

.ninja-mode {
  filter: grayscale(100%) brightness(0.5) hue-rotate(180deg);
  transition: filter 1s ease-in-out;
  -webkit-transition: filter 0.5s ease-in-out;
  -moz-transition: filter 0.5s ease-in-out;
  -ms-transition: filter 0.5s ease-in-out;
  -o-transition: filter 0.5s ease-in-out;
}
</style>
