<script setup>
import { ref, onMounted } from "vue";
import { usePiniaStore } from "../store";

const store = usePiniaStore();
const showPage = ref(false);
const currentHello = ref("");

const hellos = [
  "Hey",
  "Hello",
  "Hej",
  "Ciao",
  "Hola",
  "Bonjour",
  "안녕하세요",
  "I'm Friman",
];

let helloIndex = 0;
let counter = 0;
const { $gsap } = useNuxtApp();

onMounted(() => {
  $gsap.to(".loadingeffect", { delay: 30 });
  const interval = setInterval(() => {
    if (store.countWhileLoading > 0) {
      if (counter % 3 === 0) {
        currentHello.value = hellos[helloIndex % hellos.length];
        helloIndex++;
      }
      counter++;
      store._decreaseCountWhileLoading();
    } else {
      clearInterval(interval);
      showPage.value = !showPage.value;
    }
  }, 140);
});
</script>

<template>
  <div class="bg-offgrey position-absolute top-0 left-0 background"></div>
  <div
    class="overlay bg-offgrey top-0 left-0 position-absolute z-index d-flex justify-content-center align-items-center"
    :class="{ moveOverlayBlack: showPage }"
    @transitionend="store._handleTransitionEnd()"
  >
    <h3
      class="display-5 fw-normal text-black2 loadingeffect"
      v-if="store.countWhileLoading > 0"
    >
      {{ currentHello }}
    </h3>
  </div>
  <div
    class="overlay bg-red2 top-0 left-0 position-absolute"
    :class="{ moveOverlayGreen: showPage }"
    @transitionend="store._handleTransitionEnd()"
  ></div>
</template>

<style lang="scss" scoped>
.z-index {
  z-index: 1100;
}
.background {
  width: 100vw;
  height: 97vh;
}
.overlay {
  width: 100vw;
  height: 100vh;
}

.moveOverlayBlack {
  transition: transform 1.5s ease-out;
  transform: translateY(100%);
}

.moveOverlayGreen {
  transition: transform 2s ease-out;
  transform: translateY(100%);
}
</style>
