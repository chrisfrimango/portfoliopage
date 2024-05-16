<script setup>
import { usePiniaStore } from "../store";
const store = usePiniaStore();
</script>

<template>
  <div>
    <LoadingEffect v-if="!store.transitionFinished" />
    <Nav
      class="position-fixed z-5 w-100"
      v-if="store.countWhileLoading === 0 && store.transitionFinished"
    />
    <main v-if="store.countWhileLoading === 0 && store.transitionFinished">
      <Header />
      <Projects />
      <SayHi />
    </main>
  </div>
</template>

<style lang="scss" scoped>
div {
  overflow-x: hidden;
  scroll-behavior: smooth;
  background-color: #fcfcfc;
}
</style>
