<script setup>
import { ref, computed } from "vue";
import iconList from "#build/nuxt-bootstrap-icons.json";

const initial = ref({
  opacity: 0,
  y: 100,
});

const visibleOnce = ref({
  opacity: 0.8,
  y: 0,
  rotate: 5,
});

const sayhiInitial = ref({
  opacity: 0,
  y: 100,
});

const sayhiVisibleOnce = ref({
  opacity: 0.8,
  y: 0,
  transition: "ease-in-out",
});
</script>

<template>
  <BContainer fluid class="bg-offgrey p-4 mb-5 custom-container" id="about">
    <div class="custom-width">
      <BRow>
        <BCol
          col="12"
          sm="12"
          md="6"
          class="d-flex flex-column justify-content-center mb-4 custom-padding"
          style="max-width: 900px"
        >
          <h1 class="text-black2 text-nowrap fw-bold text-uppercase ms-md-5">
            Hello
            <span class="text-black2 fw-light fst-italic text-uppercase"
              >again,</span
            >
          </h1>
          <h2
            class="text-black2 fs-2 fw-normal lh-base ms-md-5 mb-3"
            v-motion-slide-visible-once-right
          >
            I'm <span class="custom-underline">Christoffer Friman</span>, former
            sales and marketing Ninja, now developing the craft as developer.
            Driven, creative, curious, pragmatic and prestige-less team player.
            Ready to combine business insight with tech skills.
          </h2>
        </BCol>
        <BCol col="12" sm="12" md="6"></BCol>
      </BRow>
      <BRow>
        <BCol sm="12" md="6" class="d-flex justify-content-end">
          <BImg
            fluid
            src="/assets/images/surf5.jpg"
            alt="Image 1"
            class="mb-5 custom-shadow"
            style="max-width: 100%; height: auto; object-fit: contain"
            v-motion
            :initial="initial"
            :visible-once="visibleOnce"
          />
        </BCol>
        <BCol
          sm="12"
          md="6"
          class="d-flex flex-column align-items-center justify-content-center mb-5"
        >
          <h3
            class="text-end text-darkgrey fs-4 fw-light lh-base mx-md-5"
            v-motion-slide-visible-once-left
          >
            I have always had a drive to create and build, which has manifested
            in various ways throughout my life and career and after more than a
            decade in the field of sales, marketing, and business development,
            where I have communicated and marketed solutions, I now
            <span class="custom-underline"
              >want to be part of creating those solutions</span
            >. I see an opportunity to contribute value by combining my
            experience and insights in business development and building
            long-term relationships with customers and colleagues, with my newly
            acquired skills in fullstack development. Currently in my second
            semester of the fullstack program.
          </h3>
        </BCol>
        <BCol
          sm="12"
          md="6"
          class="d-flex flex-column align-items-center justify-content-center mb-5"
        >
          <h3
            class="text-end text-darkgrey fs-4 fw-light lh-base mx-md-5"
            v-motion-slide-visible-once-left
          >
            Where am I <span class="custom-underline">right know</span> in terms
            of <span class="custom-underline">technical skills?</span> I have a
            solid foundation in HTML, CSS, and JavaScript. I typically start
            with vanilla JavaScript for smaller projects, which gives me the
            flexibility to deeply understand JavaScript's core principles as I
            learn. Additionally, I use and am learning various frameworks and
            libraries to build modern web applications, such as Nuxt, Vue.js,
            React, and Next.js. I'm currently integrating backend technologies
            like Node.js and Express, and exploring MongoDB and MySQL for
            database management to broaden my full-stack development
            capabilities. For adding interactive animations to web content, I
            use GSAP.
          </h3>
        </BCol>
      </BRow>
      <BRow>
        <BCol col="12" sm="12" md="6"></BCol>
      </BRow>
      <BRow class="mt-md-6">
        <BCol class="d-flex flex-column gap-2">
          <h3
            class="text-black2 fs-5 fw-light font-monospace lh-sm text-center"
            id="sayhi"
            v-motion-slide-visible-once-right
            style="max-width: 500px; margin: 0 auto"
          >
            Looking forward to connecting with people & ninjas in the industry!
          </h3>
          <h4
            class="text-red2 fs-1 fw-bold lh-sm mt-3 text-uppercase text-center"
            v-motion
            :initial="sayhiInitial"
            :visible-once="sayhiVisibleOnce"
            :delay="100"
          >
            say hi!
          </h4>
          <BCol class="d-flex justify-content-center gap-4">
            <a
              href="mailto:christoffer.k.friman@gmail.com"
              class="text-black2 text-decoration-none ms-2 text-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                class="bi bi-envelope"
                viewBox="0 0 16 16"
              >
                <path
                  d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/christoffer-friman/"
              target="_blank"
              class="text-black2 text-decoration-none ms-2 text-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                class="bi bi-linkedin"
                viewBox="0 0 16 16"
              >
                <path
                  d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
                />
              </svg>
            </a>
            <a
              href="https://github.com/chrisfrimango"
              target="_blank"
              class="text-black2 text-decoration-none ms-2 text-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                class="bi bi-github"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
                />
              </svg>
            </a>
          </BCol>
        </BCol>
      </BRow>
    </div>
  </BContainer>
</template>

<style lang="scss" scoped>
.custom-container {
  min-height: 100vh;

  .custom-width {
    max-width: 1400px;
    margin: 0 auto;
  }

  .custom-shadow {
    -webkit-box-shadow: 16px 21px 61px 22px rgba(62, 66, 66, 0.5);
    -moz-box-shadow: 16px 21px 61px 22px rgba(62, 66, 66, 0.5);
    box-shadow: 16px 21px 61px 22px rgba(62, 66, 66, 0.5);
  }

  .custom-underline {
    text-decoration-line: underline;
    text-decoration-style: "solid";
    text-decoration-color: #ff3b00;
    text-decoration-thickness: 3px;
  }

  .custom-padding {
    padding-top: 8rem;
  }
}
</style>
