<template>
  <div class="main-layout">
    <div class="layout-content">
      <Navbar />
      <router-view />
      <Footer />
      <SubFooter />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer.vue";
import SubFooter from "../components/SubFooter.vue";

export default {
  components: {
    Navbar,
    Footer,
    SubFooter,
  },
};
</script>

<style></style>
