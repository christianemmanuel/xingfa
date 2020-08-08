<template>
  <div>
    <Banner />

    <div class="container">
      <PopulareSports />
      <StadiumBetting />
      <ServiceAdvantage />
    </div>

    <Footer />
  </div>
</template>

<script>
import Banner from "../../components/Banner.vue";
import PopulareSports from "../../components/PopulareSports.vue";
import StadiumBetting from "../../components/StadiumBetting.vue";
import ServiceAdvantage from "../../components/ServiceAdvantage.vue";
import Footer from "../../components/Footer.vue";

export default {
  name: "Home",
  components: {
    Banner,
    PopulareSports,
    StadiumBetting,
    ServiceAdvantage,
    Footer
  },
};
</script>

<style lang="scss">
</style>
