<template>
  <div class="not-found flex flex-col items-center justify-center min-h-[100vh]">
    <h1 class="mb-4 text-2xl">
      404 Not Found
    </h1>

    <router-link
      v-slot="{ navigate }"
      custom
      to="/"
    >
      <TheButton
        @click="navigate"
      >
        Return Home
      </TheButton>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NotFoundView",
});
</script>
