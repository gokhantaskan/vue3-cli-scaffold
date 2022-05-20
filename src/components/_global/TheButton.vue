<template>
  <button class="border rounded bg-blue-500 px-4 text-white h-[36px] flex items-center justify-center">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TheButton",
});
</script>
