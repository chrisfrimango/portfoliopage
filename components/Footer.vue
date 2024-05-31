<script setup></script>

<template>
  <BContainer
    fluid
    class="bg-offgrey custom-container d-flex justify-content-center align-items-center gap-3 gap-sm-5 flex-sm-row flex-column-reverse"
  >
    <footer class="footer footer-center text-base-content text-darkgrey">
      <aside>
        <p class="m-0 custom-text">2024 &copy; design by Christoffer Friman</p>
      </aside>
    </footer>
    <NinjaMode />
  </BContainer>
</template>

<style lang="scss" scoped>
.custom-container {
  width: 100%;
  max-width: 100vw;
  padding-bottom: 1rem;

  .custom-text {
    font-size: 0.8rem;
  }
}
</style>
