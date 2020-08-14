<template>
  <div>
    <section class="dj-game-page">
      <div class="fishing-game-section">
        <div class="container">
          <div class="game-detail-left">
            <img src="../../assets/images/dj/图层-339.png" alt="图层-334" class="title 图层-334">

            <div class="game-detail-list">
              <div class="game-detail-item">
                <h4>最全赛事 一应俱全</h4>
                <p>横空出世，立刻以其高度还原的线下游戏的体验和专业的竞技 性赢得了大量玩家的追捧！</p>
              </div>

              <div class="game-detail-item">
                <h4>最全赛事 一应俱全</h4>
                <p>横空出世，立刻以其高度还原的线下游戏的体验和专业的竞技 性赢得了大量玩家的追捧！</p>
              </div>
            </div>

            <div class="game-info">
              <ul>
                <li>
                  <i class="icon icon-dota"></i>
                </li>
                <li>
                  <i class="icon icon-masters"></i>
                </li>
                <li>
                  <i class="icon icon-tga"></i>
                </li>
                <li>
                  <i class="icon icon-league"></i>
                </li>
                <li>
                  <i class="icon icon-the-summit"></i>
                </li>
              </ul>

              <button type="button" class="play-game">立即游戏</button>
            </div>

          </div>

          <img src="../../assets/images/dj/图层-22.png" class="effect-1" alt="图层-22">
          
        </div>

        <div class="main-nav-game">
          <ul>
            <li>
              <router-link to="/xing-power-competition"><i class="icon icon-xf"></i> 兴發电竞</router-link>
            </li>
            <li>
              <router-link to="/"><i class="icon icon-xf"></i> 兴發电竞</router-link>
            </li>
          </ul>
        </div>
      </div>
      <img src="../../assets/images/dj/图层-233.png" class="big-img-1" alt="img">
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
  name: 'XingPowerCompetition'
}
</script>

<style lang="scss">
.dj-game-page {
  font-size: 14px;
  color: #959dab;
  display: block;
  position: relative;
  background-image: url("../../assets/images/dj/dj_b.jpg");
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  min-height: 793px;
  .game-detail-left {
    margin-top: 85px;
  }
  .main-nav-game {
    bottom: 15px;
  }
}
.big-img-1 {
  width: 878px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
}
img.effect-1 {
  width: 878px;
  position: absolute;
  top: -24px;
  right: 0;
}
.game-info  {
  .icon {
    &.icon-dota {
      background-image: url("../../assets/images/dj/dj_icon.png");
      background-position: 0 0;
    }
    &.icon-masters {
      background-image: url("../../assets/images/dj/dj_icon.png");
      background-position: -81px 0;
      width: 55px;
    }
    &.icon-tga {
      background-image: url("../../assets/images/dj/dj_icon.png");
      background-position: -174px 0;
      width: 48px;
    }
    &.icon-league {
      background-image: url("../../assets/images/dj/dj_icon.png");
      background-position: -264px -3px;
      height: 49px;
    }
    &.icon-the-summit {
      background-image: url("../../assets/images/dj/dj_icon.png");
      background-position: -348px -2px;
      width: 61px;
    }
  }
}
</style>