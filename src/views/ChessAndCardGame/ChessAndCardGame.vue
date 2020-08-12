<template>
  <div>
    <section class="qp-game-page">
      <div class="fishing-game-section">
        <div class="container">
          <div class="game-detail-left">
            <img src="../../assets/images/qp/图层-337.png" alt="图层-337" class="title 图层-337">

            <div class="game-detail-list">
              <div class="game-detail-item">
                <h4>创新独特 玩法新颖</h4>
                <p>横空出世，立刻以其高度还原的线下游戏的体验和专业的竞技 性赢得了大量玩家的追捧！</p>
              </div>
            </div>

            <div class="game-info">
              <ul>
                <li>
                  <i class="icon icon-flagship-hall"></i>
                  <span>旗舰厅</span>
                </li>
                <li>
                  <i class="icon icon-international-room"></i>
                  <span>国际厅</span>
                </li>
                <li>
                  <i class="icon icon-vip-room"></i>
                  <span>贵宾厅</span>
                </li>
                <li>
                  <i class="icon icon-baccarat-room"></i>
                  <span>百家乐</span>
                </li>
              </ul>

              <button type="button" class="play-game">立即游戏</button>
            </div>

          </div>

          <img src="../../assets/images/qp/图层-214.png" class="big-img-2" alt="img">

          <img src="../../assets/images/qp/图层-211.png" class="effect-2" alt="图层-211">
          <img src="../../assets/images/qp/图层-212.png" class="effect-3" alt="图层-212">
          
        </div>

        <div class="main-nav-game">
          <ul>
            <li>
              <router-link to="/chess-and-card-game"><i class="icon icon-xf"></i> 大唐棋牌</router-link>
            </li>
            <li>
              <router-link to="/"><i class="icon icon-xf"></i> 开元棋牌</router-link>
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
  name: 'ChessAndCardGame'
}
</script>

<style lang="scss">
.qp-game-page {
  font-size: 14px;
  color: #959dab;
  display: block;
  position: relative;
  background-image: url("../../assets/images/qp/qp_b.jpg");
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  min-height: 793px;
  .game-detail-left {
    margin-top: 85px;
  }
  .main-nav-game {
    bottom: 30px;
  }
  .play-game {
    margin-top: 80px;
  }
}
.big-img-2 {
  width: 502px;
  position: absolute;
  top: 40px;
  right: 150px;
  z-index: 2;
}
.effect-2 {
  width: 480px;
  position: absolute;
  top: 206px;
  right: 30px;
  z-index: 3;
}
.effect-3 {
  width: 145px;
  position: absolute;
  top: 350px;
  right: 500px;
  z-index: 3;
}
.game-info {
  .icon {
    &.icon-flagship-hall {
      background-image: url("../../assets/images/qp/qp_icon.png");
      background-position: 0 0;
    }
    &.icon-international-room {
      background-image: url("../../assets/images/qp/qp_icon.png");
      background-position: -91px 0;
    }
    &.icon-vip-room {
      background-image: url("../../assets/images/qp/qp_icon.png");
      background-position: -179px 0;
    }
    &.icon-baccarat-room {
      background-image: url("../../assets/images/qp/qp_icon.png");
      background-position: -269px 0;
    }
  }
}





// .game-info  {
//   .icon {
//     &.icon-dota {
//       background-image: url("../../assets/images/dj/dj_icon.png");
//       background-position: 0 0;
//     }
//     &.icon-masters {
//       background-image: url("../../assets/images/dj/dj_icon.png");
//       background-position: -81px 0;
//       width: 55px;
//     }
//     &.icon-tga {
//       background-image: url("../../assets/images/dj/dj_icon.png");
//       background-position: -174px 0;
//       width: 48px;
//     }
//     &.icon-league {
//       background-image: url("../../assets/images/dj/dj_icon.png");
//       background-position: -264px -3px;
//       height: 49px;
//     }
//     &.icon-the-summit {
//       background-image: url("../../assets/images/dj/dj_icon.png");
//       background-position: -348px -2px;
//       width: 61px;
//     }
//   }
// }
</style>