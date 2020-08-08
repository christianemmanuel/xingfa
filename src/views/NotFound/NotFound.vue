<template>
  <div>
    <section class="section page-404">
      <h2>(404) 网页未找到</h2>
    </section>

    <Footer />
  </div>
</template>

<script>
import Footer from "../../components/Footer.vue";

export default {
  name: "NotFound",
  components: {
    Footer
  }
};
</script>

<style lang="scss">
.page-404 {
  min-height: 72.5vh;
  text-align: center;
  h2 {
    margin-top: 4rem;
    font-size: 2.3rem;
    line-height: 4rem;
    font-weight: 600;
  }
}
</style>
