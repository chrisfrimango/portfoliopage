// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@pinia/nuxt",
    "@bootstrap-vue-next/nuxt",
    "nuxt-bootstrap-icons",
    "@vueuse/nuxt",
    "@vueuse/motion/nuxt",
    "@hypernym/nuxt-gsap",
  ],
  bootstrapIcons: {
    prefix: "nuxt-icon",
    display: "component",
    expose: true,
    showList: true,
  },
  gsap: {
    extraPlugins: {
      scrollTrigger: true,
    },
  },
  css: ["@/assets/main.scss"],
  runtimeConfig: {
    public: {
      motion: {
        directives: {
          "pop-bottom": {
            initial: {
              scale: 0,
              opacity: 0,
              y: 100,
            },
            visible: {
              scale: 1,
              opacity: 1,
              y: 0,
            },
          },
        },
      },
    },
  },
});
