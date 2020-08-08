<template>
  <section class="section stadium-betting-section">
    <div class="v-1-header">
      <img src="../assets/images/Home/图层-14.png" alt="Img" />
      <hr />
      <p>
        查看所有电子竞技主要赛事中即将举行的比赛的最新赔率。使用我们低
        <br />抽水的赔率立即投注，赢取更多彩金。
      </p>
    </div>
    <div class="stadium-betting-container">
      <div class="stadium-betting-list">
        <router-link to="/" class="stadium-betting-item">
          <div class="detail">
            <p>真人娱乐</p>
            <span>LIVE CASINO</span>
          </div>
          <img src="../assets/images/Home/组-18-拷贝-7.png" alt="Img" />
        </router-link>
        <router-link to="/" class="stadium-betting-item">
          <div class="detail">
            <p>电子竞技</p>
            <span>ESPORTS</span>
          </div>
          <img src="../assets/images/Home/组-18-拷贝-6.png" alt="Img" />
        </router-link>
        <router-link to="/" class="stadium-betting-item">
          <div class="detail">
            <p>体育竞技</p>
            <span>SPORTS</span>
          </div>
          <img src="../assets/images/Home/组-18-拷贝-5.png" alt="Img" />
        </router-link>
        <router-link to="/" class="stadium-betting-item">
          <div class="detail">
            <p>棋牌游戏</p>
            <span>POKER</span>
          </div>
          <img src="../assets/images/Home/组-18-拷贝-4.png" alt="Img" />
        </router-link>
        <router-link to="/" class="stadium-betting-item">
          <div class="detail">
            <p>棋牌游戏</p>
            <span>POKER</span>
          </div>
          <img src="../assets/images/Home/组-18-拷贝-4.png" alt="Img" />
        </router-link>
        <router-link to="/" class="stadium-betting-item">
          <div class="detail">
            <p>捕鱼达人</p>
            <span>FISHING</span>
          </div>
          <img src="../assets/images/Home/组-18-拷贝-3.png" alt="Img" />
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "StadiumBetting",
};
</script>

<style lang="scss">
.stadium-betting-container {
  margin-top: 45px;
  margin-bottom: 20px;
}
.stadium-betting-list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .stadium-betting-item {
    text-decoration: none;
    display: block;
    position: relative;
    &:hover {
      img {
        transform: scale(0.85);
        z-index: -1;
      }
      &:before {
        opacity: 1;
        visibility: visible;
        transform: skewX(-7deg) translate3d(-50%, -50%, 0) scale(1);
      }
    }
    &:before {
      opacity: 0;
      visibility: hidden;
      transition: all linear 180ms;
      position: absolute;
      content: "立即前往>";
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fefefe;
      font-size: 23px;
      left: 35%;
      top: 50%;
      margin: auto;
      background-color: #1d5d6b;
      background-image: linear-gradient(#111720a8, #111720, #111720a8);
      background-blend-mode: normal, normal;
      box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.3);
      border-radius: 6px;
      transform: skewX(-7deg) translate3d(-50%, -50%, 0) scale(0.8);
      transform-origin: center;
      width: 196px;
      height: 485px;
      z-index: 2;
    }

    img {
      transition: all linear 250ms;
      width: 213px;
      height: 407px;
    }
  }
  .detail {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    left: 40px;
    right: 0;
    margin: auto;
    color: #ffffff;
    margin-top: 31px;
    p {
      margin-top: 0;
      margin-bottom: 0.35rem;
    }
    span {
      display: block;
      color: #fefefe;
      font-size: 14px;
    }
  }
}
.stadium-betting-section {
  display: block;
  position: relative;
  background-image: url("../assets/images/Home/地球背景.png");
  background-repeat: no-repeat;
  background-position: center 110px;
  background-size: 100%;
}
</style>