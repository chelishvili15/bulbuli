<template>
  <div class="w-full flex flex-col items-center" :class="isMobile && 'px-6'">
    <input
      v-model="val"
      type="text"
      name="url"
      placeholder="Copy youtube link here"
      class="w-1/3 text-green-600 font-extralight border-2 border-green-400 rounded-lg h-10 px-4 focus:outline-green-400 placeholder-green-500 placeholder:font-extralight"
      :class="isMobile && 'w-full'"
      autofocus
      autocomplete="off"
      @keyup.enter="handleEnter"
    />

    <div v-if="checkError" class="w-1/3 text-xs mt-1 text-red-600 font-light">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script setup>
import { useIsMobile } from "@/composable/useIsMobile";
import { useRouter } from "vue-router";
import { computed, ref } from "vue";

const val = ref("");
const errorMessage = ref("Please add correct youtube link");
const router = useRouter();
const { isMobile }  = useIsMobile()

const checkError = computed(() => {
  return !(
    val.value.includes("https://www.youtube.com/watch?v=") || val.value == ""
  );
});

const handleEnter = () => {
  if (
    val.value.includes("https://www.youtube.com/watch?v=") ||
    val.value == ""
  ) {
    const id = val.value.replace("https://www.youtube.com/watch?v=", '').slice(0,11)
    router.push(`download/${id}`)
  }
};
</script>

<style lang="scss" scoped></style>
