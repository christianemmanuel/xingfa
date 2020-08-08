<template>
  <div class="annoucement-container">
    <div class="container">
      <span class="time">GMT+8 2019/07/17 下午3：44：33 星期三</span>
      <div class="marquee-container">
        <marquee-text :duration="55" :repeat="2">
          <div class="marquee-item">
            <ul>
              <li
                v-for="(announcement, index) in announcements"
                v-bind:key="index"
              >
                {{ announcement.announcement }}
              </li>
            </ul>
          </div>
        </marquee-text>
      </div>

      <div class="login">
        <router-link to="/" class="el-button el-button--info el-button--small"
          >登录</router-link
        >
        <router-link
          to="/"
          class="el-button el-button--primary el-button--small"
          >开设账户</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import MarqueeText from 'vue-marquee-text-component'
export default {
  name: 'Annoucement',
  components: {
    MarqueeText,
  },
  data() {
    return {
      announcements: [
        {
          announcement:
            '尊敬的用户：【建设崔守芬0736】已停止使用，请勿存款到此银行，请',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.annoucement-container {
  height: 38px;
  font-size: 12px;
  display: flex;
  align-items: center;
  .container {
    display: flex;
    align-items: center;
    .time {
      color: #4b4e53;
    }
  }
  .login {
    margin-left: auto;
  }
}
.marquee-container {
  position: relative;
  border-top-left-radius: 0.15rem;
  border-top-right-radius: 0.15rem;
  width: 373px;
  left: 0;
  margin-left: 18px;
  padding: 0.2rem 0;
  padding-left: 35px;
  background-image: url('../assets/images/Home/volume-icon.png');
  background-repeat: no-repeat;
  background-position: 0px center;
  background-size: 21px;
  .marquee-item {
    font-size: 16px;
    margin: 0 1rem;
    color: #4b4e53;
    ul {
      display: flex;
      list-style: none;
      padding: 0;
      margin: 0;
      align-items: center;
      justify-content: center;
      li {
        font-size: 12px;
        margin: 0 0.3rem;
      }
    }
  }
}
</style>
