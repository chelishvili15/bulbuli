<template>
  <div class="flex flex-col justify-center items-center p-10 gap-10 bg-red-50">
    <div
      class="border-4 px-20 py-12 rounded"
    >
      <button
        class="bg-blue-500 px-8 py-3 cursor-pointer rounded-xl text-gray-100 hover:bg-blue-700 hover:text-white"
        @click="buttonClicked"
      >
        Download
      </button>
    </div>
    <div>
      <span class="font-semibold">Title: </span>
      <span>{{ title?.replace('[OFFICIAL VIDEO]', '') }}</span>
    </div>

    <iframe :src="src" height="90px" width="40px"></iframe>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import axios from "axios";

const link = ref({})
const title = ref('')
const src = ref('')
const id = ref('XGcX5wopq3M')

onMounted(async() => {
  const route = useRoute();
  id.value = route.params.path[0]

  const options = {
    method: "GET",
    url: "https://youtube-mp36.p.rapidapi.com/dl",
    params: { id: id.value },
    headers: {
      "X-RapidAPI-Key": "69f56c9d5dmsh47a93b89b474344p121e24jsnec66aa328a1e",
      "X-RapidAPI-Host": "youtube-mp36.p.rapidapi.com",
    },
  }

  const response = await axios.request(options);
  
  title.value = response.data.title
  link.value = response.data.link
})

const buttonClicked = () => {
  src.value = link.value
};
</script>

<style lang="scss" scoped></style>
