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
  app: {
    head: {
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        { rel: "icon", sizes: "32x32", href: "/favicon-32x32.png" },
        { rel: "icon", sizes: "16x16", href: "/favicon-16x16.png" },
        { rel: "manifest", href: "/site.webmanifest" }, // Länk till din favicon
      ],
    },
  },
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
