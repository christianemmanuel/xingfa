<template>
  <div>
    <section class="section app-page">
      <div class="app-section">
        <div class="container">
          <div class="app-nav">
            <router-link to="/">手机H5网页</router-link>
            <router-link to="/app">全站APP下载</router-link>
            <router-link to="/">XX电竞APP下载</router-link>
            <router-link to="/">XX体育APP下载</router-link>
          </div>

          <div class="app-detail">
            <img src="../../assets/images/App/图层-231.png" alt="图层-231" class="图层-231">

            <div class="right-detail">
              <img src="../../assets/images/App/最佳电竞竞猜.png" alt="最佳电竞竞猜" class="最佳电竞竞猜">
              <p>全球首家一体化娱乐原生APP，尽显流畅、完美操作。海量体育、电竞顶尖赛事，真人娱乐、彩票投注及电子游艺等，最新最全娱乐项目尽在掌中体验扫码下载，即刻拥有！</p>

              <div class="app-option">
                <div class="app-item">
                  <img src="../../assets/images/App/图层-226.jpg" alt="图层-226">
                  <p>扫描二维码下载iOS <br> 安卓纯原生手机客户端</p>
                  <a href="www.xx123.com" target="_blank">www.xx123.com</a>
                </div>

                <div class="app-item">
                  <img src="../../assets/images/App/图层-228.jpg" alt="图层-228">
                  <p>使用浏览器输入以下网址 <br> 免下载访问</p>
                  <a href="www.xx123.com" target="_blank">www.xx123.com</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Footer from "../../components/Footer.vue";
export default {
  components: {
    Footer
  },
  name: 'App'
}
</script>

<style lang="scss">
.app-page {
  font-size: 14px;
  color: #959dab;
  display: block;
  position: relative;
  background-image: url("../../assets/images/App/图层-232.jpg");
  background-repeat: no-repeat;
  background-position: top center;
  background-size: 100%;
  padding-top: 80px;
  .app-nav {
    width: 1092px;
    font-size: 14px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    a {
      width: 243px;
      height: 60px;
      background-color: #2a313e;
      border-radius: 3px;
      color: #959dab;
      font-size: 14px;
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;
      &:hover,
      &.router-link-exact-active {
        background-image: linear-gradient(90deg, 
            #35d8f2 0%, 
            #2188c9 100%), 
          linear-gradient(
            #2a313e, 
            #2a313e);
          background-blend-mode: normal, 
            normal;
          box-shadow: -2px 2px 7px 0px 
            rgba(0, 0, 0, 0.35);
          color: #ffffff;
      }
    }
  }
}
.图层-231 {
  width: 400px;
}
.right-detail {
    width: 580px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.app-detail {
  text-align: center;
  display: flex;
  justify-content: space-between;
  width: 1175px;
  margin: auto;
  margin-top: 75px;
  .最佳电竞竞猜 {
    width: 576px;
    height: 53px;
    margin-bottom: 50px;
  }
  .app-option {
    margin-top: 45px;
    display: flex;
    justify-content: space-around;
    width: 375px;
    p {
      margin: 20px 0;
    }
  }
}
</style>