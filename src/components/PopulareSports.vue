<template>
  <section class="section">
    <div class="v-1-header">
      <img src="../assets/images/Home/图层-13.png" alt />
      <hr />
      <p>
        查看所有电子竞技主要赛事中即将举行的比赛的最新赔率。使用我们低
        <br />抽水的赔率立即投注，赢取更多彩金。
      </p>
    </div>

    <div class="e-sport-container">
      <div class="tabs-nav-wrapper">
        <div class="tab-nav-list">
          <VueSlickCarousel :arrows="true" :slidesToShow="3" :infinite="true" :slidesToScroll="3">
            <div class="tab-nav-item">
              <a
                class="tab-nav-link"
                @click.prevent="setActive('英雄联盟')"
                :class="{ active: isActive('英雄联盟') }"
                href="/"
              >
                <i class="icon icon-lol"></i> 英雄联盟
              </a>
            </div>
            <div class="tab-nav-item">
              <a
                class="tab-nav-link"
                @click.prevent="setActive('DOTA2')"
                :class="{ active: isActive('DOTA2') }"
                href="/"
              >
                <i class="icon icon-dota"></i> DOTA2
              </a>
            </div>
            <div class="tab-nav-item">
              <a
                class="tab-nav-link"
                @click.prevent="setActive('CSGO')"
                :class="{ active: isActive('CSGO') }"
                href="/"
              >
                <i class="icon icon-csgo"></i> CSGO
              </a>
            </div>

            <div class="tab-nav-item">
              <a
                class="tab-nav-link"
                @click.prevent="setActive('TEST1')"
                :class="{ active: isActive('TEST1') }"
                href="/"
              >TEST1</a>
            </div>

            <div class="tab-nav-item">
              <a
                class="tab-nav-link"
                @click.prevent="setActive('TEST2')"
                :class="{ active: isActive('TEST2') }"
                href="/"
              >TEST2</a>
            </div>

            <div class="tab-nav-item">
              <a
                class="tab-nav-link"
                @click.prevent="setActive('TEST3')"
                :class="{ active: isActive('TEST3') }"
                href="/"
              >TEST3</a>
            </div>
          </VueSlickCarousel>
        </div>
      </div>

      <div class="tab-content">
        <div class="tab-pane fade" :class="{ 'active show': isActive('英雄联盟') }">
          <div class="card-list">
            <div class="card-item">
              <div class="card-content">
                <div class="opponent">
                  <h5 class="team-name-1">GROUND ZERO</h5>
                  <div class="versus">
                    <img src="../assets/images/Home/图层-35.png" alt="image" />
                    <img src="../assets/images/Home/图层-36.png" alt="image" />
                  </div>
                  <h5 class="team-name-2">SPIRIT</h5>
                </div>
                <div class="schedule">
                  LVP SLO 夏季赛 2019
                  <br />18：30
                </div>
                <a class="go-now">立即前往</a>
              </div>
            </div>
            <div class="card-item">
              <div class="card-content">
                <div class="opponent">
                  <h5 class="team-name-1">GROUND ZERO</h5>
                  <div class="versus">
                    <img src="../assets/images/Home/图层-35.png" alt="image" />
                    <img src="../assets/images/Home/图层-36.png" alt="image" />
                  </div>
                  <h5 class="team-name-2">SPIRIT</h5>
                </div>
                <div class="schedule">
                  LVP SLO 夏季赛 2019
                  <br />18：30
                </div>
                <a class="go-now">立即前往</a>
              </div>
            </div>
            <div class="card-item">
              <div class="card-content">
                <div class="opponent">
                  <h5 class="team-name-1">GROUND ZERO</h5>
                  <div class="versus">
                    <img src="../assets/images/Home/图层-35.png" alt="image" />
                    <img src="../assets/images/Home/图层-36.png" alt="image" />
                  </div>
                  <h5 class="team-name-2">SPIRIT</h5>
                </div>
                <div class="schedule">
                  LVP SLO 夏季赛 2019
                  <br />18：30
                </div>
                <a class="go-now">立即前往</a>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" :class="{ 'active show': isActive('DOTA2') }">
          <div class="card-list">
            <div class="card-item">
              <div class="card-content">
                <div class="opponent">
                  <h5 class="team-name-1">GROUND ZERO</h5>
                  <div class="versus">
                    <img src="../assets/images/Home/图层-35.png" alt="image" />
                    <img src="../assets/images/Home/图层-36.png" alt="image" />
                  </div>
                  <h5 class="team-name-2">SPIRIT</h5>
                </div>
                <div class="schedule">
                  LVP SLO 夏季赛 2019
                  <br />18：30
                </div>
                <a class="go-now">立即前往</a>
              </div>
            </div>
            <div class="card-item">
              <div class="card-content">
                <div class="opponent">
                  <h5 class="team-name-1">GROUND ZERO</h5>
                  <div class="versus">
                    <img src="../assets/images/Home/图层-35.png" alt="image" />
                    <img src="../assets/images/Home/图层-36.png" alt="image" />
                  </div>
                  <h5 class="team-name-2">SPIRIT</h5>
                </div>
                <div class="schedule">
                  LVP SLO 夏季赛 2019
                  <br />18：30
                </div>
                <a class="go-now">立即前往</a>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" :class="{ 'active show': isActive('CSGO') }">
          <div class="card-list">
            <div class="card-item">
              <div class="card-content">
                <div class="opponent">
                  <h5 class="team-name-1">GROUND ZERO</h5>
                  <div class="versus">
                    <img src="../assets/images/Home/图层-35.png" alt="image" />
                    <img src="../assets/images/Home/图层-36.png" alt="image" />
                  </div>
                  <h5 class="team-name-2">SPIRIT</h5>
                </div>
                <div class="schedule">
                  LVP SLO 夏季赛 2019
                  <br />18：30
                </div>
                <a class="go-now">立即前往</a>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" :class="{ 'active show': isActive('TEST1') }">TAB 1</div>
        <div class="tab-pane fade" :class="{ 'active show': isActive('TEST2') }">TAB 2</div>
        <div class="tab-pane fade" :class="{ 'active show': isActive('TEST3') }">TAB 3</div>
      </div>
    </div>

    <img src="../assets/images/Home/图层-24.png" class="vs-img1" alt="image" />
  </section>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
export default {
  name: "PopulareSports",
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      activeItem: "英雄联盟",
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
  },
};
</script>

<style lang="scss">
.e-sport-container {
  position: relative;
  z-index: 1;
  min-height: 362px;
  .tab-pane {
    display: none;
  }
  .slick-prev {
    display: none !important;
  }

  .tabs-nav-wrapper {
    position: relative;
    width: 744px;
    margin-bottom: 30px;
    &:after {
      position: absolute;
      display: block;
      content: "\e791";
      font-family: element-icons !important;
      font-style: normal;
      font-weight: 400;
      font-variant: normal;
      text-transform: none;
      line-height: 1;
      display: inline-block;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-size: 11px;
      right: 69px;
      top: 14px;
      color: #89919e;
    }
    .tab-nav-list {
      width: 558px;
      height: 39px;
      background-color: #141924;
      .tab-nav-link {
        height: 40px;
        width: 186px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #959dab;
        text-decoration: none;
        font-size: 13px;
        padding: 0 !important;
        margin: 0 !important;
        position: relative;
        &.active {
          background-color: #222a34;
          &:after {
            background-color: #35e7f6;
          }
        }
        &:after {
          position: absolute;
          display: block;
          content: "";
          bottom: -1px;
          left: 0;
          width: 100%;
          height: 1px;
          background-color: #2e343c;
        }
      }
    }
  }
  .slick-slider {
    display: flex !important;
    justify-content: center;
    align-content: center;
    height: 100%;
  }
  .slick-arrow {
    font-size: 0;
    display: block;
    position: absolute;
    right: -186px;
    width: 186px;
    border: none;
    height: 40px;
    outline: none;
    color: #959dab;
    background-color: #141924;
    cursor: pointer;
    background-repeat: no-repeat;
    background-position: 52px 7px;
    background-size: 22px;
    background-image: url("../assets/images/Home/图层-23.png");

    &:before {
      position: absolute;
      display: block;
      content: "更多";
      left: 0;
      right: 0;
      margin: auto;
      font-size: 13px;
      top: 10px;
      font-family: "PingFang SC", sans-serif;
    }

    &:after {
      position: absolute;
      display: block;
      content: "";
      bottom: -1px;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: #2e343c;
    }
  }
  .slick-list {
    height: 41px;
  }
  .card-list {
    display: flex;
    justify-content: space-around;
    .card-item {
      width: 240px;
      height: 253px;
      display: block;
      position: relative;
      background-image: url("../assets/images/Home/组-7876.png");
      background-repeat: no-repeat;
      background-position: center;
      background-size: 100%;
      transition: all ease-in-out 180ms;

      &:nth-child(2n) {
        margin-top: 40px;
      }
      &:hover {
        transform: scale(1.06);
      }
    }
  }
  .tab-content {
    position: relative;
    width: 744px;
  }
  .card-content {
    h5 {
      font-size: 12px;
      font-weight: 700;

      position: relative;
      margin: auto;
      display: block;
      text-align: center;
      text-transform: uppercase;
      &.team-name-1 {
        color: #32b4ef;
        position: absolute;
        left: 104px;
        top: 58px;
      }
      &.team-name-2 {
        color: #ffc600;
        position: absolute;
        right: 100px;
        margin-top: 18px;
      }
    }
  }
  .versus {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    width: 150px;
    margin: auto;
    left: 1px;
    top: 42px;
    height: 115px;
    &:before {
      position: absolute;
      display: block;
      content: "";
      background-image: url("../assets/images/Home/vs.png");
      background-repeat: no-repeat;
      background-position: center;
      background-size: 66px;
      width: 100%;
      height: 57px;
    }
    img {
      max-width: 52px;
      &:first-child {
        margin-bottom: auto;
      }
      &:last-child {
        margin-top: auto;
      }
    }
  }
  .schedule {
    font-size: 12px;
    color: #959dab;
    text-align: center;
    margin-top: 49px;
    padding-right: 20px;
    line-height: 1.25rem;
  }
  .go-now {
    width: 103px;
    height: 26px;
    background-image: url("../assets/images/Home/图层-801.png");
    background-repeat: no-repeat;
    background-size: auto;
    background-position: top;
    font-size: 12px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    float: right;
    margin-right: 60px;
    margin-top: 6px;
    transition: all ease-in-out 180ms;
    &:hover {
      opacity: 0.75;
    }
  }
}
img.vs-img1 {
  position: absolute;
  top: 90px;
  right: -100px;
  max-width: 850px;
}
</style>