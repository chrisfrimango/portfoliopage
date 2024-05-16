<script setup>
import { ref, onMounted } from "vue";
// import { useWindowScroll } from "@vueuse/core";

const { $gsap } = useNuxtApp();

onMounted(() => {
  $gsap.to(".heytext", {
    delay: 0.2,
    rotation: 540,
    duration: 2,
    stagger: 0.25,
    opacity: 0.8,
  });
  $gsap.from(".herotext", {
    opacity: 0,
    y: -100,
    duration: 2,
    stagger: 0.25,
    delay: 0.2,
  });
  $gsap.from(".subtext", {
    opacity: 0,
    duration: 1,
  });
});

// const { x, y } = useWindowScroll();

// const scroll = ref(0);
// watch(y, (value) => {
//   scroll.value = value;
// });
</script>

<template>
  <BContainer
    fluid
    class="bg-offgrey custom-container d-flex justify-content-center align-items-center flex-column"
    id="home"
  >
    <BRow>
      <BCol
        class="d-flex justify-content-center align-items-center flex-column text-center effect"
      >
        <h1
          class="text-start text-wrap text-black2 fw-bold herotext text-uppercase"
          style="max-width: 900px"
        >
          <h1
            class="text-center text-red2 fst-italic fw-light heytext"
            @click="playAnimation()"
          >
            hey!
          </h1>
          Developer in the making with a passion for creating.
        </h1>
        <h5 class="text-darkgrey fs-5 subtext">
          Studying to become a full-stack ninja
        </h5>
      </BCol>
    </BRow>
  </BContainer>
</template>

<style lang="scss" scoped>
.custom-container {
  min-height: 100vh;
  max-width: 100vw;
}
</style>
