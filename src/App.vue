<template>
  <div class="container-fluid p-0">
    <HeaderSection></HeaderSection>
    <router-view></router-view>
  </div>
</template>

<script setup>
import HeaderSection from "./components/layout-folder/HeaderSection.vue";
</script>

<style scoped></style>

