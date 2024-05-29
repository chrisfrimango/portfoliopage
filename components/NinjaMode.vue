<script setup>
import { ref, watch } from "vue";
import { usePiniaStore } from "../store";
const store = usePiniaStore();

const buttonToggle = ref(false);
const buttonName = ref("Ninja Mode off");

watch(buttonToggle, (newVal) => {
  buttonName.value = newVal ? "Ninja Mode on" : "Ninja Mode off";
  newVal ? (store.ninjamode = true) : (store.ninjamode = false);
});
</script>

<template>
  <BButton
    squared
    size="sm"
    v-model:pressed="buttonToggle"
    variant="outline-black"
    class="text-black font-monospace text-uppercase pl-2 pr-2 custom-width"
    :class="{ 'text-red2': buttonToggle }"
    >{{ buttonName }}</BButton
  >
</template>

<style lang="scss" scoped>
.custom-width {
  width: 150px;
}
</style>
