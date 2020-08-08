<template>
  <section class="section service-advantage-section">
    <div class="v-2-header">
      <img src="../assets/images/Home/图层-15.png" alt="Img" />
      <p>看看客户对我们的评价</p>
    </div>
    <div class="service-advantage-container">
      <div class="service-advantage-list">
        <div class="service-advantage-item">
          <div class="c100 cgreen" :class="'p' + percentageGreen">
            <h5>
              <span>{{ percentageGreen }}</span>
              <small>秒</small>
            </h5>
            <div class="slice">
              <div class="bar"></div>
              <div class="fill"></div>
            </div>
          </div>
          <h4>ADVANTAGE<br />THUNDER FIRE</h4>
          <div class="legend legend-green">平均存款时间</div>
        </div>

        <div class="service-advantage-item">
          <div class="c100 cpurple" :class="'p' + percentagePurple">
            <h5>
              <span>{{ percentagePurple }}</span>
              <small>秒</small>
            </h5>
            <div class="slice">
              <div class="bar"></div>
              <div class="fill"></div>
            </div>
          </div>
          <h4>ADVANTAGE<br />THUNDER FIRE</h4>
          <div class="legend legend-purple">平均存款时间</div>
        </div>

        <div class="service-advantage-item">
          <div class="c100 corange" :class="'p' + percentageOrange">
            <h5>
              <span>{{ percentageOrange }}</span>
              <small>秒</small>
            </h5>
            <div class="slice">
              <div class="bar"></div>
              <div class="fill"></div>
            </div>
          </div>
          <h4>ADVANTAGE<br />THUNDER FIRE</h4>
          <div class="legend legend-orange">平均存款时间</div>
        </div>

        <div class="service-advantage-item">
          <div class="c100 cviolet" :class="'p' + percentageViolet">
            <h5>
              <span>{{ percentageViolet }}</span>
              <small>秒</small>
            </h5>
            <div class="slice">
              <div class="bar"></div>
              <div class="fill"></div>
            </div>
          </div>
          <h4>ADVANTAGE<br />THUNDER FIRE</h4>
          <div class="legend legend-violet">平均存款时间</div>
        </div>
      </div>

      <div class="service-advantage-detail">
        <div class="service-advantage-info">
          <i class="icon-round icon-more-rofessional"></i>
          <div>
            <h5>更专业</h5>
            <p>每天为您提供近千场精彩体育赛事，更有真人，彩票，电子游戏等多种 娱乐，让您拥有完美游戏体验。</p>
          </div>
        </div>

        <div class="service-advantage-info">
          <i class="icon-round icon-more-convenient"></i>
          <div>
            <h5>更便捷</h5>
            <p>引领市场的卓越技术，自主研发了全套终端应用，让您畅享Web,H5,更有iOS，Android原生App，让您随时随地，娱乐投注随心所欲！7x24小时在线客服提供最贴心，最优质的服务。</p>
          </div>
        </div>

        <div class="service-advantage-info">
          <i class="icon-round icon-safer"></i>
          <div>
            <h5>更安全</h5>
            <p>独家开发，采用128位加密技术和严格的安全管理体系，客户资金得到最完善的保障，让您全情尽享娱乐，赛事投注，无后顾之忧！</p>
          </div>
        </div>

        <div class="service-advantage-info">
          <i class="icon-round icon-faster"></i>
          <div>
            <h5>更快速</h5>
            <p>最新技术自主研发的财务处理系统，真正做到极速存，取，转。独家网络优化技术，为您提供一流的游戏体验，最大优化网络延迟。</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ServiceAdvantage",
  components: {},
  data() {
    return {
      percentageGreen: 60,
      percentagePurple: 60,
      percentageOrange: 60,
      percentageViolet: 60,
    };
  },
};
</script>

<style lang="scss">
.v-2-header {
  margin-bottom: 20px;
  text-align: center;
  img {
    height: 25px;
    pointer-events: none;
  }
  p {
    font-size: 14px;
    color: #959dab;
    line-height: 1.25rem;
    margin-top: 18px;
  }
}
.service-advantage-section {
  display: block;
  position: relative;
  background-image: url("../assets/images/Home/图层-39.png");
  background-repeat: no-repeat;
  background-position: center top;
  background-size: 100%;
}
.c100 {
  &.cgreen {
    .bar {
      border: 0.07em solid #36eefc !important;
    }
  }
  &.cpurple {
    .bar {
      border: 0.07em solid #6274f2 !important;
    }
  }
  &.corange {
    .bar {
      border: 0.07em solid #e79c5b !important;
    }
  }
  &.cviolet {
    .bar {
      border: 0.07em solid #cd97ed !important;
    }
  }
  h5 {
    span {
      color: #959dab;
      font-size: 29px;
      font-weight: 600;
    }
    small {
      font-size: 13px;
      color: #959dab;
      margin-left: 2px;
    }
  }
}
.service-advantage-list {
  display: flex;
  justify-content: space-between;
}
.service-advantage-item {
  text-align: center;
  h4 {
    color: #86e6f6;
    font-size: 10px;
    line-height: 0.85rem;
    margin: 0.5rem 0 0.15rem 0;
  }
  .legend {
    color: #959dab;
    font-size: 13px;
    text-align: left;
    display: inline-block;
    margin-left: 19px;
    margin-top: 10px;
    position: relative;
    &:before {
      position: absolute;
      content: "";
      display: block;
      width: 12px;
      height: 12px;
      background-color: #ffffff;
      border-radius: 3px;
      left: -19px;
    }
    &.legend-green {
      &:before {
        background-color: #36eefc;
      }
    }
    &.legend-purple {
      &:before {
        background-color: #6274f2;
      }
    }
    &.legend-orange {
      &:before {
        background-color: #e79c5b;
      }
    }
    &.legend-violet {
      &:before {
        background-color: #cd97ed;
      }
    }
  }
}
.service-advantage-detail {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 35px;
  margin-top: 50px;
  .service-advantage-info {
    width: 469px;
    display: flex;
    div {
      margin-left: 30px;
    }
    .icon-round {
      display: inline-block;
      min-width: 57px;
      height: 57px;
      position: relative;
      background-repeat: no-repeat;
      background-position: center top;
      background-size: auto;
        &.icon-more-rofessional {
          background-image: url("../assets/images/Home/图层-55.png");
        }
        &.icon-more-convenient {
          background-image: url("../assets/images/Home/图层-57.png");
        }
        &.icon-safer {
          background-image: url("../assets/images/Home/图层-56.png");
        }
        &.icon-faster {
          background-image: url("../assets/images/Home/图层-58.png");
        }
    }
    h5 {
      font-size: 18px;
      color: #32ceed;
      margin-bottom: 5px;
    }
    p {
      font-size: 13px;
      color: #959dab;
      line-height: 1.45em;
    }
  }
}
</style>
