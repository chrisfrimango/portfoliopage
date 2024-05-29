<script setup></script>

<template>
  <BContainer
    fluid
    class="bg-offgrey custom-container d-flex justify-content-center align-items-center gap-4"
  >
    <footer class="footer footer-center text-base-content text-darkgrey">
      <aside>
        <p class="m-0">&copy; 2024 - Christoffer Friman</p>
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
}
</style>
