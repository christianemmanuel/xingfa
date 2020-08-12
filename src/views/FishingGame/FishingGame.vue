<template>
  <div>
    <section class="section fishing-game-page">
      <div class="fishing-game-section">
        <div class="container">
          <div class="game-detail-left">
            <img src="../../assets/images/FishingGame/图层-334.png" alt="图层-334" class="title 图层-334">

            <div class="game-detail-list">
              <div class="game-detail-item">
                <h4>玩法多样 优质体验</h4>
                <p>横空出世，立刻以其高度还原的线下游戏的体验和专业的竞技 性赢得了大量玩家的追捧！</p>
              </div>

              <div class="game-detail-item">
                <h4>捕鱼游戏 感受激情</h4>
                <p>横空出世，立刻以其高度还原的线下游戏的体验和专业的竞技 性赢得了大量玩家的追捧！</p>
              </div>
            </div>

            <div class="game-info">
              <ul>
                <li>
                  <i class="icon icon-flagship"></i>
                  <span>旗舰厅</span>
                </li>
                <li>
                  <i class="icon icon-international"></i>
                  <span>国际厅</span>
                </li>
                <li>
                  <i class="icon icon-vip"></i>
                  <span>贵宾厅</span>
                </li>
                <li>
                  <i class="icon icon-baccarat"></i>
                  <span>百家乐</span>
                </li>
                <li>
                  <i class="icon icon-dragon"></i>
                  <span>龙虎</span>
                </li>
              </ul>

              <button type="button" class="play-game">立即游戏</button>
            </div>

          </div>

          <div class="game-detail-right">
            <img src="../../assets/images/FishingGame/图层-366.png" class="big-img" alt="Dolphine">
          </div>

          <img src="../../assets/images/FishingGame/图层-367.png" class="bubble" alt="图层-367">
          
        </div>

        <div class="main-nav-game">
          <ul>
            <li>
              <router-link to="/fishing-game"><i class="icon icon-xf"></i> AG捕鱼王</router-link>
            </li>
            <li>
              <router-link to="/"><i class="icon icon-xf"></i> AG捕鱼王</router-link>
            </li>
            <li>
              <router-link to="/"><i class="icon icon-xf"></i> AG捕鱼王</router-link>
            </li>
            <li>
              <router-link to="/"><i class="icon icon-xf"></i> AG捕鱼王</router-link>
            </li>
          </ul>
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
  name: 'FishingGame'
}
</script>

<style lang="scss">
.fishing-game-section {
  .container {
    display: flex;
  }
}
.fishing-game-page {
  font-size: 14px;
  color: #959dab;
  display: block;
  position: relative;
  background-image: url("../../assets/images/FishingGame/bu_b.jpg");
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  padding-top: 60px;
  min-height: 759px;
}
.game-detail-right {
  width: 100%;
}
.game-detail-left {
  width: 472px;
  display: flex;
  flex-direction: column;
  .title {
    margin-left: auto;
  }
  .图层-334 {
    width: 372px;
    margin-left: auto;
  }
}
.game-detail-list {
  margin-top: 45px;
  padding-left: 25px;
}
.game-detail-item {
    margin-bottom: 35px;
    padding-left: 47px;
    background-repeat: no-repeat;
    background-position: top left;
    background-size: 27px;
    &:nth-child(1) {
      background-image: url("../../assets/images/FishingGame/01.png");
    }
    &:nth-child(2) {
      background-image: url("../../assets/images/FishingGame/02.png");
    }
  h4 {
    font-size: 19px;
    color: #1564bf;
    font-weight: 600;
    margin-bottom: 10px;
  }
  p {
    font-size: 15px;
  }
}
.game-info {
  .icon {
    width: 47px;
    height: 47px;
    display: inline-block;
    background-size: auto;
    margin: 0 20px;
    &.icon-flagship {
      background-image: url("../../assets/images/FishingGame/by_icon.png");
      background-position: 0 0;
    }
    &.icon-international {
      background-image: url("../../assets/images/FishingGame/by_icon.png");
      background-position: -91px 0;
    }
    &.icon-vip {
      background-image: url("../../assets/images/FishingGame/by_icon.png");
      background-position: -179px 0;
    }
    &.icon-baccarat {
      background-image: url("../../assets/images/FishingGame/by_icon.png");
      background-position: -269px 0;
    }
    &.icon-dragon {
      background-image: url("../../assets/images/FishingGame/by_icon.png");
      background-position: -360px 0;
    }
  }
}
.game-info {
  width: 472px;
  margin-top: 15px;
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    li {
    text-align: center;
      span {
        color: #a0bcd6;
        display: block;
        margin-top: 10px;
      }
    }
  }
}
.play-game {
  text-align: revert;
  border: none;
  outline: none;
  background-color: #095bc9;
  width: 221px;
  height: 42px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  background-image: linear-gradient(0deg, #095bc9 49%, #003c7a 100%), linear-gradient( #2a313e, #2a313e);
  background-blend-mode: normal, normal;
  box-shadow: 7px 5px 9px 0px rgba(21, 10, 255, 0.49);
  border-radius: 21px;
  cursor: pointer;
  position: relative;
  margin: 50px auto 0 auto;
  &:after {
    position: absolute;
    display: block;
    content: "";
    width: 221px;
    height: 42px;
    bottom: -45px;
    background-image: url("../../assets/images/FishingGame/btn-shadow.png");
    background-repeat: no-repeat;
    background-position: center;
  }
}
section.section.fishing-game-page {
  padding-top: 50px;
}
.big-img {
  max-width: 83%;
  float: right;
  margin-top: 70px;
}
.bubble {
  position: absolute;
  right: -92px;
  max-width: 59%;
}
.main-nav-game {
  display: block;
  text-align: center;
  position: absolute;
  width: 100%;
  bottom: 27px;
  z-index: 3;
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    li {
      margin: 0 20px;
      a {
        position: relative;
        color: #869ebf;
        font-size: 14px;
        text-decoration: none;
        padding: 12px 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        .icon {
          width: 25px;
          height: 25px;
          display: inline-block;
          background-image: url("../../assets/images/FishingGame/by1g.png");
          background-repeat: no-repeat;
          background-position: center;
        }
        &:hover,
        &.router-link-exact-active {
          color: #32ceed;
          &:before {
            position: absolute;
            display: block;
            content: "";
            width: 116px;
            height: 9px;
            bottom: -12px;
            left: 17px;
            background-image: url("../../assets/images/FishingGame/图层-292.png");
          }
          .icon {
            background-image: url("../../assets/images/FishingGame/by1.png");
          }
        }
      }
    }
  }
}
</style>