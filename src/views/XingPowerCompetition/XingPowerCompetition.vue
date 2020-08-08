<template>
  <div>
    <section class="section dj-game-page">
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
            
          </div>
          <img src="../../assets/images/dj/图层-233.png" class="big-img" alt="img">

          <!-- <img src="../../assets/images/FishingGame/图层-367.png" class="bubble" alt="图层-367"> -->
          
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
  padding-top: 60px;
  min-height: 864px;
}
.big-img-1 {
  width: 958px;
  position: absolute;
  top: -63px;
  right: -143px;
}
</style>