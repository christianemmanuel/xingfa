<template>
  <footer class="main-footer">
    <div class="footer-menu">
      <div class="container">
        <div class="logo">
          <i class="icon-log"></i>
          <router-link to="/">关于XX</router-link>
        </div>

        <div class="links">
          <router-link to="/">资料收集</router-link>
          <router-link to="/">法律依据</router-link>
          <router-link to="/">关于我们</router-link>
          <router-link to="/">竞猜规则</router-link>
          <router-link to="/">补偿</router-link>
          <router-link to="/">加盟代理</router-link>
          <router-link to="/">博彩责任</router-link>
        </div>
      </div>
      <div class="legal-gaming">
        <p>XX电竞是全球领先的合法博彩公司，拥有菲律宾政府PAGCOR所颁发的离岸博彩许可证，并受其监管</p> <i class="icon-pagcor"></i>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style lang="scss">
.main-footer {
  .footer-menu {
    display: flex;
    flex-direction: column;
    position: relative;
    height: 106px;
    background-color: #010104;
    align-items: center;
    .container {
      display: flex;
      justify-content: space-between;
      margin: initial;
      margin-top: 25px;
      a {
        font-size: 14px;
        color: #ffffff;
        text-decoration: none;
        transition: all ease-in-out 180ms;
        &:hover {
          color: #86e6f6 !important;
        }
      }
      .logo {
        display: flex;
        min-width: 95px;
        .icon-log {
          display: block;
          position: relative;
          background-image: url("../assets/images/Home/logo.png");
          width: 36px;
          height: 15px;
          background-repeat: no-repeat;
          background-size: contain;
          margin-right: 15px;
        }
      }
      .links {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding-left: 100px;
        a {
          color: #959dab;
        }
      }
    }
    .legal-gaming {
      display: block;
      color: #959dab;
      font-size: 12px;
      margin-top: 29px;
      display: flex;
      align-items: center;
      p {
        margin-bottom: 0;
        margin-right: 10px;
      }
    }
  }
}
.icon-pagcor {
  display: inline-block;
  position: relative;
  background-image: url("../assets/images/pagcor.png");
  width: 22px;
  height: 22px;
  background-repeat: no-repeat;
  background-size: contain;
}
</style>