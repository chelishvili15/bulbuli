<template>
  <div class="border-4 px-20 py-12 absolute left-1/2 -translate-x-1/2 top-10 rounded">
    <button class="bg-blue-500 px-8 py-3 cursor-pointer rounded-xl text-gray-100 hover:bg-blue-700 hover:text-white">Download</button>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

onMounted(() => {
  const route = useRoute()
  console.log(route.params.path[0])
})
</script>

<style lang="scss" scoped>

</style>