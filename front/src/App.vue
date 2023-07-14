<script setup>
import Header from "@/components/Header.vue"
import Layout from "@/components/Layout.vue"
import Footer from "@/components/Footer.vue"
</script>

<template>
  <div>
    <Layout>
      <Header />
      <router-view></router-view>
      <Footer />
    </Layout>
  </div>
</template>

<style scoped></style>
