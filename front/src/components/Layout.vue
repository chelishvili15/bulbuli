<template>
  <div class="layout h-screen flex flex-col items-center gap-10">
    <slot />
  </div>
</template>

<script setup>

</script>

<style scoped>
.layout {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
}
</style>