<template>
  <section class="entertainment-page">

    <h1 class="entertainment-money">$ {{formatPrice(entertainementPrice)}}</h1>
    
    <div class="entertainment-section">
      <div class="container">
        
        <div class="promotion-container">
          
          <div class="tag">
            <ul>
              <li><a href="#" class="active">PT电子</a></li>
              <li><a href="#">CQ9电子</a></li>
              <li><a href="#">SG电子</a></li>
              <li><a href="#">PG电子</a></li>
              <li><a href="#">TTG电子</a></li>
              <li><a href="#">PNG电子</a></li>
              <li><a href="#">AE电子</a></li>
              <li><a href="#">BBIN电子</a></li>
              <li><a href="#">SW电子</a></li>
              <li><a href="#">MG电子</a></li>
              <li><a href="#">PP电子</a></li>
            </ul>
          </div>

          <div class="header-entertainment">
            <div class="game-list-tab">
              <ul>
                <li>
                  <a href="/" class="active"><i class="icon icon-1"></i> 全部游戏</a>
                </li>
                <li>
                  <a href="/"><i class="icon icon-2"></i> 全部游戏</a>
                </li>
                <li>
                  <a href="/"><i class="icon icon-3"></i> 最新游戏</a>
                </li>
              </ul>
            </div>
            <el-input placeholder="输入查找游戏名" prefix-icon="el-icon-search" v-model="search"></el-input>
          </div>

          <div class="game-list">
            <router-link to="/" class="game-card" :key="index" v-for="(game, index) in games">
              <div class="thumbnail">
                <img v-bind:src="game.thumbnail" :title="game.name"/>
              </div>
              <p>{{game.name}}</p>
            </router-link>
          </div>

          <div class="entertainment-pagination">
            <el-pagination layout="prev, pager, next" :total="games.length"></el-pagination>
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
  name: "Entertainment",
  components: {
    Footer
  },
  data() {
    return {
      activeItem: "all-offers",
      search: '',
      entertainementPrice: 216265998,
      games: [
        {
          thumbnail: require('../../assets/images/Entertainment/game-1.jpg'),
          name: '摸金校尉'
        },
        {
          thumbnail: require('../../assets/images/Entertainment/game-2.jpg'),
          name: '象财神'
        },
        {
          thumbnail: require('../../assets/images/Entertainment/game-3.jpg'),
          name: '鱼跃龙门'
        },
        {
          thumbnail: require('../../assets/images/Entertainment/game-4.jpg'),
          name: '皇上吉祥'
        },
        {
          thumbnail: require('../../assets/images/Entertainment/game-5.jpg'),
          name: '埃及寻宝'
        },
        {
          thumbnail: require('../../assets/images/Entertainment/game-6.jpg'),
          name: '双喜临门'
        },
        {
          thumbnail: require('../../assets/images/Entertainment/game-7.jpg'),
          name: '三只猴子'
        },
        {
          thumbnail: require('../../assets/images/Entertainment/game-8.jpg'),
          name: '金猪报财'
        },
        {
          thumbnail: require('../../assets/images/Entertainment/game-9.jpg'),
          name: '宝石侠-大宝剑'
        },
        {
          thumbnail: require('../../assets/images/Entertainment/game-10.jpg'),
          name: '重金摇滚'
        },
        {
          thumbnail: require('../../assets/images/Entertainment/game-11.jpg'),
          name: '圣诞欢乐送'
        },
        {
          thumbnail: require('../../assets/images/Entertainment/game-12.jpg'),
          name: '水果丛林'
        },
        {
          thumbnail: require('../../assets/images/Entertainment/game-13.jpg'),
          name: '麻辣火锅'
        },
        {
          thumbnail: require('../../assets/images/Entertainment/game-14.jpg'),
          name: '逆袭的小红帽'
        },
        {
          thumbnail: require('../../assets/images/Entertainment/game-15.jpg'),
          name: '国王的召唤'
        },
        {
          thumbnail: require('../../assets/images/Entertainment/game-16.jpg'),
          name: '蒸汽朋克'
        }
      ]
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
    formatPrice(value) {
      let val = (value/1).toFixed(2).replace('.', '.')
      return val.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,").replace(/\.00$/,'');
    }
  }
};
</script>

<style lang="scss">
.entertainment-page {
  display: block;
  position: relative;
  background-image: url("../../assets/images/Entertainment/图层-109.jpg");
  background-repeat: no-repeat;
  background-position: center top;
  background-size: 100%;
  .entertainment-money {
    color: #151c2b;
    font-size: 53px;
    position: absolute;
    margin: auto;
    width: 100%;
    text-align: center;
    top: 114px;
    font-weight: 600;
    background: -webkit-linear-gradient(#6499a2, #342213 84%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
.entertainment-section {
  margin-top: 16.5%;
  padding-bottom: 60px;
  .promotion-container {
    width: 1201px;
    height: 1261px;
    background-color: #222a34;
    border-radius: 8px;
    margin: auto;
    padding: 42px 47px;
    display: flex;
    flex-direction: column;
    .tag {
      padding-bottom: 25px;
      margin-bottom: 28px;
      border-bottom: 1px solid #333b44;
      ul {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-gap: 20px 25px;
        li {
          a {
          width: 115px;
          height: 45px;
          background-blend-mode: normal, 
          normal;
          border-radius: 23px;
          display: block;
          color: #ffffff;
          font-size: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          background-color: #333b44;
          box-shadow: 0px 3px 4px 0px rgba(0, 0, 0, 0.15);
          &.active,
          &:hover {
          background-image: linear-gradient(90deg, #35d8f2 0%, #2188c9 100%), linear-gradient(#2a313e, #2a313e);
          box-shadow: none;
          }
          }
        }
      }
    }

    .game-list {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-gap: 25px 30px;
      width: 925px;
      margin: auto;
      margin-top: 45px;
      .game-card {
        border-radius: 6px;
        position: relative;
        overflow: hidden;
        display: block;
        text-decoration: none;
        &:hover {
          transform: scale(1.07);
          transform-origin: center;
        }
        .thumbnail {
          width: 100%;
          height: 132px;
          overflow: hidden;
          img {
            width: 100%;
            height: 132px;
            object-fit: cover;
            object-position: center;
          }
        }
        p {
          background-color: #333b44;
          height: 38px;
          display: flex;
          align-items: center;
          padding: 0 10px;
          font-size: 14px;
          color: #959dab;
        }
      }
    }
  }
}
.game-list-tab {
  ul {
    display: flex;
    li {
      a {
        text-decoration: none;
        color: #959dab;
        font-size: 14px;
        display: flex;
        align-items: center;
        margin-right: 30px;
        &.active,
        &:hover {
          color: #32ceed;
        }
        .icon {
        display: inline-block;
        margin-right: 13px;
        }
        .icon-1 {
        width: 25px;
        height: 25px;
        background-image: url("../../assets/images/Entertainment/1.png");
        }
        .icon-2 {
        width: 25px;
        height: 27px;
        background-image: url("../../assets/images/Entertainment/2.png");
        }
        .icon-3 {
        width: 25px;
        height: 26px;
        background-image: url("../../assets/images/Entertainment/3.png");
        }
      }
    }
  }
}
.header-entertainment {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
