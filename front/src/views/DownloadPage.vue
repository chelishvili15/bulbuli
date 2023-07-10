<template>
  <div class="flex flex-col justify-center items-center p-10 gap-10 bg-red-50">
    <div
      class="border-4 px-20 py-12 rounded"
    >
      <button
        class=" px-8 py-3 rounded-xl text-gray-100"
        :class="loader || error ? 'bg-blue-300': 'bg-blue-500 cursor-pointer hover:bg-blue-700 hover:text-white' "
        :disabled="loader || error"
        @click="buttonClicked"
      >
        Download
      </button>
    </div>
    <div v-if="!loader && !error" >
      <span class="font-semibold">Title: </span>
      <span>{{ title?.replace('[OFFICIAL VIDEO]', '').replace('(OFFICIAL VIDEO)', '') }}</span>
    </div>

    <Loader v-if="loader" />
    <ErrorMessage v-if="error" />

    <iframe :src="src" height="90px" width="40px"></iframe>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import axios from "axios";
import Loader from "@/components/Loader.vue";
import ErrorMessage from "@/components/ErrorMessage.vue";

const link = ref({})
const title = ref('')
const src = ref('')
const id = ref('XGcX5wopq3M')
const loader = ref(true) 
const error = ref(false)

// onMounted(async() => {
//   const route = useRoute();
//   id.value = route.params.path[0]
//   loader.value = true

//   const options = {
//     method: "GET",
//     url: "https://youtube-mp36.p.rapidapi.com/dl",
//     params: { id: id.value },
//     headers: {
//       "X-RapidAPI-Key": "69f56c9d5dmsh47a93b89b474344p121e24jsnec66aa328a1e",
//       "X-RapidAPI-Host": "youtube-mp36.p.rapidapi.com",
//     },
//   }

//   const response = await axios.request(options);

//   console.log(response.data.status)

//   if (response.data.status != 'fail') {
//     title.value = response.data.title
//     loader.value = false
//     link.value = response.data.link
//   } else {
//     error.value = true
//     loader.value = false
//   }
// })

const buttonClicked = () => {
  src.value = link.value
};
</script>

<style lang="scss" scoped></style>
