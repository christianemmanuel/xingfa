<template>
  <section class="discount-page">
    
    <div class="promotion-section">
      <div class="container">
        <aside class="main-aside">
          <div class="aside-content">
            <div class="header-sidebar">优惠活动</div>
            <div class="menu-sidebar">
              <ul>
                <li>
                  <a href="/" @click.prevent="setActive('all-offers')" :class="{ active: isActive('all-offers') }">
                    <i class="icon icon-all-offers"></i><span>全部优惠</span>
                  </a>
                </li>
                <li>
                  <a href="/" @click.prevent="setActive('e-sports-offers')" :class="{ active: isActive('e-sports-offers') }">
                    <i class="icon icon-esport-offers"></i><span>电竞优惠</span>
                  </a>
                </li>
                <li>
                  <a href="/" @click.prevent="setActive('sports-offers')" :class="{ active: isActive('sports-offers') }">
                    <i class="icon icon-sport-offers"></i><span>体育优惠</span>
                  </a>
                </li>
                <li>
                  <a href="/" @click.prevent="setActive('chess-offers')" :class="{ active: isActive('chess-offers') }">
                    <i class="icon icon-chess-offers"></i><span>棋牌优惠</span>
                  </a>
                </li>
                <li>
                  <a href="/" @click.prevent="setActive('live-offers')" :class="{ active: isActive('live-offers') }">
                    <i class="icon icon-live-deal"></i><span>真人优惠</span>
                  </a>
                </li>
                <li>
                  <a href="/" @click.prevent="setActive('slot-machine')" :class="{ active: isActive('slot-machine') }">
                    <i class="icon icon-slot-machine"></i><span>老虎机/捕鱼</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </aside>

        <div class="promotion-container">
          
          <div class="promotion-grid" :class="{ 'active': isActive('all-offers') }">
            
            <div class="promotion-item">
              <div class="date">2020-07-06至2020-07-09</div>
              <div class="promotion-card">
                <div class="tag">最新活动</div>
                <img src="../../assets/images/Discount/placeholder.png" alt="img">

                <router-link to="/">查看详情>></router-link>

                <span class="category category-casino"></span>
              </div>
            </div>

            <div class="promotion-item">
              <div class="date">2020-07-06至2020-07-09</div>
              <div class="promotion-card">
                <div class="tag">最新活动</div>
                <img src="../../assets/images/Discount/placeholder.png" alt="img">

                <router-link to="/">查看详情>></router-link>

                <span class="category category-casino"></span>
              </div>
            </div>

            <div class="promotion-item">
              <div class="date">2020-07-06至2020-07-09</div>
              <div class="promotion-card">
                <div class="tag">最新活动</div>
                <img src="../../assets/images/Discount/placeholder.png" alt="img">

                <router-link to="/">查看详情>></router-link>

                <span class="category category-casino"></span>
              </div>
            </div>

            <div class="promotion-item">
              <div class="date">2020-07-06至2020-07-09</div>
              <div class="promotion-card">
                <div class="tag">最新活动</div>
                <img src="../../assets/images/Discount/placeholder.png" alt="img">

                <router-link to="/">查看详情>></router-link>

                <span class="category category-casino"></span>
              </div>
            </div>

            <div class="promotion-item">
              <div class="date">2020-07-06至2020-07-09</div>
              <div class="promotion-card">
                <div class="tag">最新活动</div>
                <img src="../../assets/images/Discount/placeholder.png" alt="img">

                <router-link to="/">查看详情>></router-link>

                <span class="category category-casino"></span>
              </div>
            </div>

          </div>

          <div class="promotion-grid" :class="{ 'active': isActive('e-sports-offers') }">
            
            <div class="promotion-item">
              <div class="date">2020-07-06至2020-07-09</div>
              <div class="promotion-card">
                <div class="tag">最新活动</div>
                <img src="../../assets/images/Discount/placeholder.png" alt="img">

                <router-link to="/">查看详情>></router-link>

                <span class="category category-casino"></span>
              </div>
            </div>

          </div>

          <div class="promotion-grid" :class="{ 'active': isActive('sports-offers') }">
            No content...
          </div>

          <div class="promotion-grid" :class="{ 'active': isActive('chess-offers') }">
            No content...
          </div>

          <div class="promotion-grid" :class="{ 'active': isActive('live-offers') }">
            No content...
          </div>

          <div class="promotion-grid" :class="{ 'active': isActive('slot-machine') }">
            No content...
          </div>

        </div>
      </div>
    </div>

    <Footer />
  </section>
</template>

<script>
import Footer from "../../components/Footer.vue";

export default {
  name: "Discounts",
  components: {
    Footer
  },
  data() {
    return {
      activeItem: "all-offers",
    };
  },
  methods: {
    isActive(menuItem) {
      return this.activeItem === menuItem;
    },
    setActive(menuItem) {
      this.activeItem = menuItem;

      return false;
    },
  }
};
</script>

<style lang="scss">
.discount-page {
  display: block;
  position: relative;
  background-image: url("../../assets/images/Discount/bg.jpg");
  background-repeat: no-repeat;
  background-position: center top;
  background-size: 100%;
}
.promotion-section {
  margin-top: 15%;
  padding-bottom: 60px;
  .container {
    display: flex;
    min-height: 984px;
    .aside-content,
    .promotion-container {
      background-color: #1a2129;
      box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.16);
      border-radius: 8px;
    }
    .promotion-container {
      width: 100%;
      padding: 30px 0 30px 20px;
      height: 984px;
      overflow: hidden;
    }
    .main-aside {
      display: flex;
      padding-right: 15px;
      .aside-content {
        width: 210px;
        padding: 15px 20px;
        .header-sidebar {
          padding-bottom: 13px;
          border-bottom: solid 1px #3f4659;
          font-size: 16px;
          color: #74acff;
          position: relative;
          padding-left: 15px;
          &:before {
            position: absolute;
            display: block;
            content: "";
            width: 3px;
            height: 17px;
            background-color: #3b92f2;
            left: 0;
          }
        }
      }
    }
    .aside-content {
      .menu-sidebar {
        ul {
          li {
            display: block;
            margin: 5px 0;
            a {
              color: #7f92ab;
              font-size: 14px;
              text-decoration: none;
              display: flex;
              align-items: center;
              padding: 10px 0;
              &.active {
                font-size: 15px;
                color: #ffffff;
              }
              &:hover {
                color: #ffffff;
              }
            }
          }
        }
      }
      .icon {
        display: inline-block;
        position: relative;
        background-repeat: no-repeat;
        background-position: center;
        width: 23px;
      }
      .icon-all-offers {
        background-image: url("../../assets/images/Discount/1.png");
        background-position: center -2px;
        height: 19px;
        background-size: 22px;
      }
      .icon-esport-offers {
        background-image: url("../../assets/images/Discount/2.png");
        height: 19px;
        background-size: 23px;
      }
      .icon-sport-offers {
        background-image: url("../../assets/images/Discount/3.png");
        height: 23px;
        background-size: 21px;
      }
      .icon-chess-offers {
        background-image: url("../../assets/images/Discount/4.png");
        height: 23px;
        background-size: 21px;
      }
      .icon-live-deal {
        background-image: url("../../assets/images/Discount/5.png");
        height: 22px;
        background-size: 21px;
      }
      .icon-slot-machine {
        background-image: url("../../assets/images/Discount/6.png");
        height: 18px;
        background-size: 21px;
      }
    }
  }
}

.promotion-grid {
  display: none;
  grid-template-columns: 1fr 1fr;
  padding-right: 20px;
  grid-gap: 40px 13px;
  position: relative;
  max-height: 925px;
  overflow: hidden;
  overflow-y: auto;
  &.active {
    display: grid;
  }
  .promotion-item {
    position: relative;
    .date {
      font-size: 14px;
      color: #8091a7;
      position: absolute;
      top: 0;
      left: 15px;
    }
  }
}
.promotion-card {
  width: 480px;
	height: 214px;
  background-image: url("../../assets/images/Discount/圆角矩形-506-拷贝.png");
  position: relative;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  img {
    width: 460px;
    height: 174px;
    background-color: #222a34;
    margin-top: 25px;
  }
  .tag {
    width: 94px;
    height: 30px;
    background-image: url("../../assets/images/Discount/最新活动.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 4px;
    font-size: 14px;
    padding-top: 2px;
    top: 18px;
    left: 23px;
  }
  a {
    font-size: 14px;
    color: #959dab;
    display: block;
    top: 1px;
    position: absolute;
    right: 19px;
    text-decoration: none;
    padding: 5px 8px;
    &:hover {
      color: #ffffff;
    }
  }
  .category {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: absolute;
    width: 114px;
    height: 114px;
    bottom: 8px;
    right: 10px;
  }
  .category-casino {
    background-image: url("../../assets/images/Discount/casino.png");
  }
}
</style>
