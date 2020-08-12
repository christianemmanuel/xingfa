<template>
  <div>
    <Announcement />
    <div class="main-nav">
      <div class="container">
        <div class="logo">
          <router-link to="/">
            <img src="../assets/images/Home/logo.png" alt="money image" />
          </router-link>
        </div>
        <nav class="menu">
          <ul>
            <li>
              <router-link to="/">
                首页
                <span>HOME</span>
              </router-link>
            </li>
            <li>
              <router-link to="/e-sports">
                电子竞技
                <span>ESPORTS</span>
              </router-link>
            </li>
            <li>
              <router-link to="/sports">
                体育
                <span>SPORTS</span>
              </router-link>
            </li>
            <li>
              <router-link to="/live-casino">
                真人娱乐城
                <span>LIVE CASINO</span>
              </router-link>
            </li>
            <li>
              <router-link to="/poker">
                棋牌
                <span>POKER</span>
              </router-link>
            </li>
            <li>
              <router-link to="/slots">
                老虎机
                <span>SLOTS</span>
              </router-link>
            </li>
            <li>
              <router-link to="/lottery">
                彩票
                <span>LOTTERY</span>
              </router-link>
            </li>
            <li>
              <router-link to="/fishing">
                捕鱼
                <span>FISHING</span>
              </router-link>
            </li>
            <li>
              <router-link to="/promotion">
                优惠活动
                <span>PROMOTION</span>
              </router-link>
            </li>
            <li>
              <router-link to="/agent">
                代理加盟
                <span>AGENT</span>
              </router-link>
            </li>
            <li>
              <router-link to="/app">
                手机APP
                <span>APP</span>
              </router-link>
            </li>
            <li>
              <router-link to="/vip">
                VIP
                <span>VIP</span>
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import Announcement from './Announcement.vue'
export default {
  components: {
    Announcement,
  },
  data() {
    return {
      activeIndex: '1',
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },
  },
}
</script>

<style lang="scss" scoped>
.main-nav {
  height: 69px;
  background-color: #222a34;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  .container {
    display: flex;
    align-items: center;
    .logo {
      position: relative;
      padding-right: 30px;
      margin-right: 30px;
      &:before {
        position: absolute;
        display: block;
        content: '';
        width: 1px;
        height: 35px;
        background-color: #2e343c;
        right: 0;
        top: 7px;
      }
      a {
        display: block;
      }
      img {
        min-width: 107px;
      }
    }
    .menu {
      width: 100%;
      ul {
        display: flex;
        justify-content: space-between;
        li {
          a {
            transition: all ease-in-out 180ms;
            color: #ffffff;
            text-decoration: none;
            text-align: center;
            display: block;
            span {
              font-size: 10px;
              text-transform: uppercase;
              display: block;
              color: #3d8183;
              margin-top: 7px;
            }
            &:hover,
            &.router-link-exact-active {
              color: #32ceed;
            }
          }
        }
      }
    }
  }
}
</style>
