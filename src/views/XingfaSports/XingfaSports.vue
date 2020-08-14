<template>
  <div>
    <section class="ty-game-page">
      <div class="fishing-game-section">
        <div class="container">
          <div class="game-detail-left">
            <img src="../../assets/images/ty/图层-3378.png" alt="图层-3378" class="title">

            <div class="game-detail-list">
              <div class="game-detail-item">
                <h4>玩法多样 优质体验</h4>
                <p>横空出世，立刻以其高度还原的线下游戏的体验和专业的竞技 性赢得了大量玩家的追捧！</p>
              </div>

              <div class="game-detail-item">
                <h4>体育赛事 感受激情</h4>
                <p>横空出世，立刻以其高度还原的线下游戏的体验和专业的竞技 性赢得了大量玩家的追捧！</p>
              </div>
            </div>

            <div class="game-info">
              <ul>
                <li>
                  <i class="icon icon-soccer"></i>
                  <span>旗舰厅</span>
                </li>
                <li>
                  <i class="icon icon-baseball"></i>
                  <span>旗舰厅</span>
                </li>
                <li>
                  <i class="icon icon-volleyball"></i>
                  <span>国际厅</span>
                </li>
                <li>
                  <i class="icon icon-basketball"></i>
                  <span>贵宾厅</span>
                </li>
                <li>
                  <i class="icon icon-billiard"></i>
                  <span>百家乐</span>
                </li>
              </ul>

              <button type="button" class="play-game">立即游戏</button>
            </div>

          </div>

          <img src="../../assets/images/ty/图层-36.png" class="big-img-3" alt="img">
          
        </div>

        <div class="main-nav-game">
          <ul>
            <li>
              <router-link to="/xing-fa-sports"><i class="icon icon-xf"></i> 兴發体育</router-link>
            </li>
            <li>
              <router-link to="/"><i class="icon icon-xf"></i> IM体育</router-link>
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
  name: 'XingfaSports'
}
</script>

<style lang="scss">
.ty-game-page {
  font-size: 14px;
  color: #959dab;
  display: block;
  position: relative;
  background-image: url("../../assets/images/ty/ty_b.jpg");
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
.big-img-3 {
  width: 655px;
  position: absolute;
  top: 6px;
  right: 47px;
  z-index: 2;
}
.game-info  {
  .icon {
    &.icon-soccer {
      background-image: url("../../assets/images/ty/ty_icon.png");
      background-position: 0 0;
    }
    &.icon-baseball {
      background-image: url("../../assets/images/ty/ty_icon.png");
      background-position: -90px 0;
    }
    &.icon-volleyball {
      background-image: url("../../assets/images/ty/ty_icon.png");
      background-position: -181px 0;
    }
    &.icon-basketball {
      background-image: url("../../assets/images/ty/ty_icon.png");
      background-position: -269px 0;
    }
    &.icon-billiard {
      background-image: url("../../assets/images/ty/ty_icon.png");
      background-position: -359px 0;
    }
  }
}
</style>