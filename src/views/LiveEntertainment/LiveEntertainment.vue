<template>
  <div>
    <section class="zr-game-page">
      <div class="fishing-game-section">
        <div class="container">
          <div class="game-detail-left">
            <img src="../../assets/images/zr/图层-338.png" alt="图层-338" class="title">

            <div class="game-detail-list">
              <div class="game-detail-item">
                <h4>性感荷官 倾情服务</h4>
                <p>横空出世，立刻以其高度还原的线下游戏的体验和专业的竞技 性赢得了大量玩家的追捧！</p>
              </div>
            </div>

            <div class="game-info">
              <ul>
                <li>
                  <i class="icon icon-coin"></i>
                  <span>旗舰厅</span>
                </li>
                <li>
                  <i class="icon icon-diamond"></i>
                  <span>国际厅</span>
                </li>
                <li>
                  <i class="icon icon-crown"></i>
                  <span>贵宾厅</span>
                </li>
                <li>
                  <i class="icon icon-heart"></i>
                  <span>百家乐</span>
                </li>
                <li>
                  <i class="icon icon-dragon-tiger"></i>
                  <span>龙虎</span>
                </li>
              </ul>
              <ul class="left-icons">
                <li>
                  <i class="icon icon-dice"></i>
                  <span>骰宝</span>
                </li>
                <li>
                  <i class="icon icon-roulette"></i>
                  <span>轮盘</span>
                </li>
              </ul>

              <button type="button" class="play-game">立即游戏</button>
            </div>

          </div>

          <img src="../../assets/images/zr/图层-73.png" class="big-img-4" alt="图层-73">

          <img src="../../assets/images/zr/图层-72.png" class="effect-4" alt="图层-72">
          
        </div>

        <div class="main-nav-game">
          <ul>
            <li>
              <router-link to="/xing-fa-sports"><i class="icon icon-xf"></i> AG真人</router-link>
            </li>
            <li>
              <router-link to="/"><i class="icon icon-xf"></i> EBET真人</router-link>
            </li>
            <li>
              <router-link to="/"><i class="icon icon-xf"></i> 欧博真人</router-link>
            </li>
            <li>
              <router-link to="/"><i class="icon icon-xf"></i> BBIN真人</router-link>
            </li>
            <li>
              <router-link to="/"><i class="icon icon-xf"></i> BG真人</router-link>
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
  name: 'LiveEntertainment'
}
</script>

<style lang="scss">
.zr-game-page {
  font-size: 14px;
  color: #959dab;
  display: block;
  position: relative;
  background-image: url("../../assets/images/zr/zr_b.jpg");
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  min-height: 805px;
  .game-detail-left {
    margin-top: 85px;
  }
  .main-nav-game {
    bottom: 31px;
  }
}
.big-img-4 {
  width: 300px;
  position: absolute;
  top: 48px;
  right: 65px;
  z-index: 2;
}
.effect-4 {
  width: 700px;
  position: absolute;
  top: 120px;
  right: -120px;
  z-index: 1;
}
.game-info  {
  .left-icons {
    margin-top: 30px;
    justify-content: left;
    padding-left: 18px;
  }
  .icon {
    &.icon-coin {
      background-image: url("../../assets/images/zr/qp_icon.png");
      background-position: 0 0;
    }
    &.icon-diamond {
      background-image: url("../../assets/images/zr/qp_icon.png");
      background-position: -91px 0;
    }
    &.icon-crown {
      background-image: url("../../assets/images/zr/qp_icon.png");
      background-position: -179px 0;
    }
    &.icon-heart {
      background-image: url("../../assets/images/zr/qp_icon.png");
      background-position: -269px 0;
    }
    &.icon-dragon-tiger {
      background-image: url("../../assets/images/zr/qp_icon.png");
      background-position: -360px 0;
    }
    &.icon-dice {
      background-image: url("../../assets/images/zr/qp_icon1.png");
      background-position: -1px 0;
      border-radius: 50px;
    }
    &.icon-roulette {
      background-image: url("../../assets/images/zr/qp_icon1.png");
      background-position: -89px 0;
      border-radius: 50px;
    }
  }
}

</style>