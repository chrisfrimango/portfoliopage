<script setup>
import { ref, onMounted, watch } from "vue";

import {
  useElementSize,
  useWindowSize,
  useIntersectionObserver,
} from "@vueuse/core";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { usePiniaStore } from "../store";

const store = usePiniaStore();

const rowRef1 = ref(null);
const rowRef2 = ref(null);
const rowRef3 = ref(null);
const rowRef4 = ref(null);
const rowRef5 = ref(null);
const rowRef6 = ref(null);

const rowInViewport = [rowRef1, rowRef2, rowRef3, rowRef4, rowRef5, rowRef6];

// GSAP
gsap.registerPlugin(ScrollTrigger);
const { $gsap, $ScrollTrigger } = useNuxtApp();

const scrollWidth = ref(null);
const { width: elWidth } = useElementSize(scrollWidth);
const { width: windowWidth } = useWindowSize();

// add animation for text

onMounted(() => {
  rowInViewport.forEach((row, index) => {
    useIntersectionObserver(row, ([{ isIntersecting }], observerElement) => {
      const leftOrRight = index % 2 === 0 ? "right" : "left";
      if (isIntersecting) {
        gsap.to(`.img${index + 1}`, {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        });
      } else {
        if (leftOrRight === "left") {
          gsap.to(`.img${index + 1}`, {
            clipPath: "polygon(0 0, 0 0, 0 0, 0 0)",
          });
        } else {
          gsap.to(`.img${index + 1}`, {
            clipPath: "polygon(100% 0, 100% 0, 100% 0, 100% 0)",
          });
        }
      }
    });
    $gsap.to(".scrollWrapper", {
      scrollTrigger: {
        trigger: ".test",
        start: "top bottom",
        end: "bottom top",
      },
      backgroundColor: "#ff3b00",
      transition: "2.5s",
      opacity: 0.9,
    });
    gsap.utils.toArray(".img-container img").forEach((img, index) => {
      gsap.to(img, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        scrollTrigger: {
          trigger: `.img${index + 1}`,
          start: "top 75%",
          end: "bottom 75%",
          scrub: 2,
        },
      });
    });
  });
});

// onMounted(() => {
//   const amountToScroll = ref(elWidth.value - windowWidth.value);

//   console.log(elWidth.value); // read current element width
//   console.log(windowWidth.value); // read current window width
//   console.log(amountToScroll.value); // read current amount to scroll

//   const tween = gsap.to(".projecttext", {
//     x: -amountToScroll.value,
//     duration: 3,
//     ease: "none",
//   });

//   ScrollTrigger.create({
//     trigger: ".scrollWrapper",
//     start: "top top",
//     end: "bottom bottom",
//     pin: true,
//     scrub: 10,
//     animation: tween,
//     markers: true,
//   });
// });

// projects data
const projects = [
  {
    src: "/game.jpg",
    alt: "Image 1",
    title: "Puzzle game",
    description: "React, sass, bootstrap",
    link: "https://chrispuzzlegame.netlify.app/",
  },
  {
    src: "/e_commerce.jpg",
    alt: "Image 2",
    title: "E-commerce",
    description: "Vite, Vue, sass, bootstrap",
  },
  {
    src: "/game.jpg",
    alt: "Image 3",
    title: "Mäpy",
    description: "Vue, sass, bootstrap",
  },
  {
    src: "/game2.jpg",
    alt: "Image 3",
    title: "Bänky",
    description: "Vue, sass, bootstrap",
  },
  {
    src: "/game2.jpg",
    alt: "Image 3",
    title: "Music player",
    description: "Vue, sass, bootstrap",
  },
];
</script>

<template>
  <BContainer
    fluid
    class="custom-container d-flex flex-column align-items-center justify-content-center scrollWrapper trigger"
    id="projects"
  >
    <h3
      class="display-1 w-100 pt-5 text-center fw-bold text-black2 text-uppercase projecttext"
    >
      Selected works
    </h3>
    <BContainer class="p-4 mb-6 mt-3">
      <BRow class="row-1 w-100 d-flex test" ref="rowRef1">
        <BCol class="h-100 custom-flex">
          <div class="img-container right">
            <BImg
              fluid
              srcset="/puzzlegame.jpg"
              alt="Image 1"
              class="img1 img"
              style="height: 100%; width: 100%; object-fit: cover"
            />

            <div class="d-flex gap-2 text-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-arrow-right pt-1"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
              <div class="d-flex flex-column">
                <a
                  class="img2 text-capitalize font-monospace"
                  href="https://chrispuzzlegame.netlify.app/"
                  target="blank"
                  >Puzzle game</a
                >
                <!-- <p class="font-monospace">React + Vite</p> -->
              </div>
            </div>
          </div>
        </BCol>
        <BCol v-if="windowWidth > 600" class="h-100 custom-flex"></BCol>
      </BRow>
      <BRow class="row-2 w-100 d-flex" ref="rowRef2">
        <BCol v-if="windowWidth > 600" class="h-100 custom-flex"></BCol>
        <BCol class="h-100 custom-flex">
          <div class="img-container left">
            <BImg
              fluid
              srcset="/ecommerce.jpg"
              alt="Image 1"
              class="img2"
              style="height: 100%; width: 100%; object-fit: cover"
            />
            <div class="d-flex justify-content-end gap-2 text-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-arrow-right pt-1"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
              <div class="d-flex flex-column align-items-start">
                <a
                  class="img3 text-capitalize font-monospace"
                  href="https://chrisfrimango.github.io/"
                  target="blank"
                  >E-commerce</a
                >
                <!-- <p class="font-monospace">Vue.js + Vite</p> -->
              </div>
            </div>
          </div>
        </BCol>
      </BRow>
      <BRow class="row-3 w-100 d-flex" ref="rowRef3">
        <BCol class="h-100 custom-flex">
          <div class="img-container right">
            <BImg
              fluid
              srcset="/dicegame.jpg"
              alt="Image 1"
              class="img3"
              style="height: 100%; width: 100%; object-fit: cover"
            />
            <div class="d-flex gap-2 text-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-arrow-right pt-1"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
              <div class="d-flex flex-column align-items-start">
                <a
                  class="img4 text-capitalize font-monospace"
                  href="https://github.com/chrisfrimango/dicegame_Socket.io"
                  target="blank"
                  >Dice game</a
                >
                <!-- <p class="font-monospace">Js + socket.io</p> -->
              </div>
            </div>
          </div>
        </BCol>
        <BCol v-if="windowWidth > 600" class="h-100 custom-flex"></BCol>
      </BRow>
      <BRow class="row-4 w-100 d-flex" ref="rowRef4">
        <BCol v-if="windowWidth > 600" class="h-100 custom-flex"></BCol>
        <BCol class="h-100 custom-flex">
          <div class="img-container left">
            <BImg
              fluid
              srcset="/daftplayer.jpg"
              alt="Image 1"
              class="img4"
              style="height: 100%; width: 100%; object-fit: cover"
            />
            <div class="d-flex justify-content-end gap-2 text-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-arrow-right pt-1"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
              <div class="d-flex flex-column align-items-start">
                <a
                  class="img5 text-capitalize font-monospace"
                  href="https://github.com/chrisfrimango/daftplayer"
                  target="blank"
                  >Music-player</a
                >
                <!-- <p class="font-monospace">Nuxt + tailwind</p> -->
              </div>
            </div>
          </div>
        </BCol>
      </BRow>
      <BRow class="row-5 w-100 d-flex" ref="rowRef5">
        <BCol class="h-100 custom-flex">
          <div class="img-container right">
            <BImg
              fluid
              srcset="/shareui.jpg"
              alt="Image 1"
              class="img5"
              style="height: 100%; width: 100%; object-fit: cover"
            />
            <div class="d-flex gap-2 text-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-arrow-right pt-1"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
              <div class="d-flex flex-column align-items-start">
                <a
                  class="img6 text-capitalize font-monospace"
                  href="https://studentiths.se/Christoffer%20Friman/Share/"
                  target="blank"
                  >My first UI</a
                >
                <!-- <p class="font-monospace">Js, Html, css</p> -->
              </div>
            </div>
          </div>
        </BCol>
        <BCol v-if="windowWidth > 600" class="h-100 custom-flex"></BCol>
      </BRow>
      <BRow class="row-6 w-100 d-flex" ref="rowRef6">
        <BCol v-if="windowWidth > 600" class="h-100 custom-flex"></BCol>
        <BCol class="h-100 custom-flex">
          <div class="img-container left">
            <BImg
              fluid
              srcset="/projectbg.svg"
              alt="Image 1"
              class="img6"
              style="height: 100%; width: 100%; object-fit: cover"
            />
            <div
              class="d-flex align-items-center justify-content-end gap-2 text-container"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                class="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
              <a
                class="img6 text-capitalize font-monospace"
                href="#"
                target="blank"
                >Comming soon..</a
              >
            </div>
          </div>
        </BCol>
      </BRow>

      <!-- <div class="bg-offgrey d-flex scrollEffect" ref="scrollWidth">
  <div
  class="max bg-offgrey d-flex justify-content-center align-items-center"
  v-for="(project, index) in projects"
  :key="index"
  >
  <BImg
  fluid
  :srcset="project.src"
  :alt="project.alt"
  style="max-height: 500px"
  />
</div>
</div> -->
    </BContainer>
  </BContainer>
</template>

<style lang="scss" scoped>
.custom-container {
  min-height: 100vh;
  min-width: 100vw;

  h3 {
    letter-spacing: 10px;
  }

  .img-container {
    width: fit-content;
    height: 100%;
  }

  .img-container.left {
    text-align: right;
  }

  .img-container.right img {
    clip-path: polygon(100% 0, 100% 0, 100% 0, 100% 0);
  }

  .img-container.left img {
    clip-path: polygon(0 0, 0 0, 0 0, 0 0);
  }

  .img1,
  .img2,
  .img3,
  .img4,
  .img5,
  .img6 {
    opacity: 0.7;
  }

  .text-container {
    padding-top: 0.5rem;
    padding-right: 0.5rem;
    transition: 1.3s;

    p {
      opacity: 0.3;
    }

    a {
      text-decoration: none;
      color: rgb(44, 44, 44);
    }

    &:hover {
      transform: translateX(10px);
      color: rgb(234, 234, 234);

      p {
        opacity: 1;
      }
      a {
        color: rgb(0, 0, 0);
        border-bottom: 1px solid rgb(0, 0, 0);
      }
    }
  }

  .img1:hover,
  .img2:hover,
  .img3:hover,
  .img4:hover,
  .img5:hover,
  .img6:hover {
    opacity: 1;
  }

  .row-1 {
    height: 200px;
  }

  .row-2 {
    height: 500px;
  }

  .row-3 {
    height: 150px;
  }

  .row-4 {
    height: 400px;
  }

  .row-5 {
    height: 600px;
  }

  .row-6 {
    height: 300px;
  }

  .custom-flex:nth-child(1) {
    flex: 3;
    display: flex;
    justify-content: flex-end;
    padding: 0;
  }

  .custom-flex:nth-child(2) {
    flex: 5;
    padding: 0;
  }

  @media (max-width: 576px) {
    .img-container {
      width: 100%; // Säkerställer att bildcontainer fyller kolumnen
    }

    .text-container {
      margin-bottom: 3rem;
    }

    .custom-flex {
      flex: 1; // Neutraliserar eventuella förinställda flexvärden
    }

    .row-1,
    .row-2,
    .row-3,
    .row-4,
    .row-5,
    .row-6 {
      height: auto; // Tar bort fastställda höjder
    }
  }
}
</style>

<!-- <BCol
  class="mb-5 position-relative d-flex justify-content-center align-items-center p-0 scrollEffect"
  v-for="(image, index) in images"
  :key="index"
  >
  <a
  :href="image.link"
  target="_blank"
  class="text-decoration-none text-offgrey"
  >
  <BImg
  fluid
  :srcset="image.src"
  :alt="image.alt"
  style="max-height: 500px"
  />
  <BCol class="position-absolute bottom-0 ms-3">
    <h5 class="font-monospace fs-6 text-lime">
      <span class="bg-black p-1">{{ image.title }}</span>
    </h5>
    <h6>
      <span class="bg-black p-1 fw-lighter">{{
        image.description
      }}</span>
    </h6>
  </BCol>
</a>
</BCol> -->
