<script setup>
import { ref, watch, onMounted } from "vue";
import { useWindowSize } from "@vueuse/core";

const { width } = useWindowSize();

const show = ref(false);
const placement = ref("end");
const navButtonName = ref("Menu.");

const navLinks = [
  { text: "Selected work.", hash: "#projects" },
  { text: "About", hash: "#about" },
  { text: "Say hi!", hash: "#sayhi" },
];

const mobileNavLinks = [
  { text: "Home", hash: "#home" },
  { text: "Projects", hash: "#projects" },
  { text: "About", hash: "#about" },
  { text: "Say hi", hash: "#sayhi" },
];

const showNav = () => {
  show.value = !show.value;
  console.log(show.value);
  navButtonName.value = show.value ? "Close." : "Menu.";
};

watch(
  [width, show],
  ([newWidth, newShow], [oldWidth, oldShow]) => {
    if (newWidth >= 992 && newShow) {
      showNav();
    }
  },
  { immediate: true }
);

const { $gsap } = useNuxtApp();

onMounted(() => {
  $gsap.from(".menu", { opacity: 0, duration: 1 });
});

const hovered = ref({
  y: [4, 0],
  opacity: [0.6, 1],
});
</script>

<template>
  <BNavbar class="bg-transparent" toggleable="lg">
    <BNavbarBrand class="menu"
      ><nuxt-link
        :to="{ hash: '#home' }"
        :external="true"
        class="text-black2 ms-md-4 ms-2 fw-normal fs-6 text-decoration-none spacing pointer"
        >Christoffer Friman.</nuxt-link
      >
    </BNavbarBrand>

    <BNavbarNav class="d-none d-lg-flex align-items-center ms-auto m-4">
      <BNavItem
        v-for="(link, index) in navLinks"
        :key="index"
        class="menu"
        v-motion
        :hovered="hovered"
      >
        <nuxt-link
          class="text-decoration-none ms-3 text-black2 fw-light pointer navspacing custom-effect"
          :to="{ hash: link.hash }"
          :external="true"
          >{{ link.text }}</nuxt-link
        >
      </BNavItem>
    </BNavbarNav>
    <BOffcanvas
      class="bg-offgrey"
      noHeaderClose
      head
      v-model="show"
      :placement="placement"
    >
      <BNavbarNav
        class="d-flex flex-column justify-content-center h-100 text-uppercase display-1"
      >
        <BNavItem v-for="(link, index) in mobileNavLinks" :key="index">
          <nuxt-link
            @click="showNav"
            class="fw-semibold text-black2 text-decoration-none"
            :to="{ hash: link.hash }"
            :external="true"
            >{{ link.text }}</nuxt-link
          ></BNavItem
        >
      </BNavbarNav>
    </BOffcanvas>
    <BButton
      variant="link"
      @click="showNav"
      class="z-4 d-lg-none mt-2 ms-auto text-decoration-none text-black2 fw-light"
    >
      {{ navButtonName }}
    </BButton>
  </BNavbar>
</template>

<style lang="scss" scoped>
.transition {
  transition: all 0.5s;
}

.pointer {
  cursor: pointer;
}

.navspacing {
  letter-spacing: 0.08rem;
}

.spacing {
  letter-spacing: 0.1rem;
}

.custom-effect:hover {
  text-shadow: rgba(227, 48, 48, 1) 0px 0px 18px;
}
</style>
