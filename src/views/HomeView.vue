<template>
  <div class="home flex flex-col items-center justify-center min-h-[100vh]">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
    >
    <TheButton
      class="test"
      @click="connect"
    >
      Connect
    </TheButton>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
  setup() {
    const connect = () => alert("connect!");

    return { connect };
  },
});
</script>
