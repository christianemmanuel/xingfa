<template>
  <section class="abous-us-page">
    
    <div class="global-content">
      
      <aside class="global-sidebar">
        <img class="logo" src="../../assets/images/AboutUs/logo.png" alt="logo">

        <div class="sidebar-menu">
          <ul>
            <li><router-link to="/about-us">关于本站</router-link></li>
            <li><router-link to="/">资料收集</router-link></li>
            <li><router-link to="/">法律依据</router-link></li>
            <li><router-link to="/">关于我们</router-link></li>
            <li><router-link to="/">竞猜规则</router-link></li>
            <li><router-link to="/">补偿</router-link></li>
            <li><router-link to="/">加盟代理</router-link></li>
            <li><router-link to="/">博彩责任</router-link></li>
          </ul>
        </div>
      </aside>

      <div class="global-main-container container">
        <div class="global-main-detail">
          <h4>法律依据</h4>
          <ol>
            <li>本隐私政策严格遵守相关数据保护法；</li>
            <li>只有当您达到所居住国家法律规定的法定年龄，才能使用娱乐场和/或网站。</li>
            <li>如果您未满 18 岁，在任何情况下均不得使用和/或网站。</li>
            <li>有些法律管辖区并未声明在线赌博的合法性，而有些则明确规定在线赌博为非法。</li>
          </ol>

          <div class="list-global">
            <div class="list-item">
              <div class="icon icon-more-products"></div>

              <div class="detail">
                <h5>更多产品： XX是业界公认的滚球专家，每月平均提供约10,000场现场滚球赛事。</h5>
                <p>并提供超过400个不同联赛的足球赛事。除了常见的职业联赛外，还提供以下联赛： 希甲/意大利C联赛杯/波甲/俄甲/克罗地亚杯/保加 利亚杯/挪威杯/德甲/罗乙/丹麦甲/法国乙/泰国国王杯/赛浦路斯杯/巴西B联赛/日本甲/韩国甲/阿根廷甲 ... ... 还有更多赛事供您选择！ 如您发现我们有遗漏掉任何赛事或您对XX网站有何意见或建议，请立即告知我们，以便我们不断完善。</p>
              </div>
            </div>

            <div class="list-item">
              <div class="icon icon-diverse-products"></div>

              <div class="detail">
                <h5>多样产品： </h5>
                <p>XX除了为您提供体育赛事选择，为您提供的真人荷官电子竞技游戏及娱乐场也是无可挑剔的。为了满足来自于世界各地的会员，XX 精心挑选各种线上游戏，给您提供最好的游戏和平台选择。 我们不断完善我们的产品并增加更多精彩刺激的新产品，让您享受一流的在 线娱乐。</p>
              </div>
            </div>

            <div class="list-item">
              <div class="icon icon-company-information"></div>

              <div class="detail">
                <h5>公司资料：</h5>
                <p>XX持有菲律宾 NorthCagayan (NCGAC) 博彩合法执照，总部位于菲律宾 Makati 金融中心。目前我们拥有全球博彩行业的精英，超 专业的技术和客服团队。希望可以通过提供优秀的产品和优质的客户服务来给客户带来最佳的在线娱乐体验。并提供比陆地赌场更高的 赔率！为了确保游戏的公平性，在选择平台方面，XX专业的客服团队每天为您提供24/7小时的热情服务；雄厚的资金和正规的财务团 队，为您提供最快的取款体验。我们采用了目前最好的加密技术和防火墙系统保护您的安全、信息私隐，并保证您享受公平，公正的游 戏。由于采用了企业级别的加密科技（1024位RSA密钥交 换和 448位blowfish），我们可以为您的数据提供比一般的商业级别的SSL 更高的保护。这一科技目前被世界上主要的金融机构所采用。</p>
              </div>
            </div>
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
  name: 'AboutUs',
  components: {
    Footer
  }
}
</script>

<style lang="scss" scoped>
.abous-us-page {
  position: relative;
}
.global-content {
  position: relative;
  .global-sidebar {
    width: 27.2%;
    height: 859px;
    background-color: #1b1d26;
    position: relative;
    background-image: url("../../assets/images/AboutUs/bg.jpg");
    background-repeat: no-repeat;
    background-position: center right;
    background-size: auto;
    display: flex;
    flex-direction: column;
    padding-top: 37px;
    z-index: 1;
    .logo {
      width: 123px;
      height: 123px;
      opacity: 0.82;
      margin-left: auto;
      margin-right: 75px;
    }
    .sidebar-menu {
      padding-right: 65px;
      margin-left: auto;
      margin-top: 34px;
      ul{
        li {
          padding: 4px 0;
          position: relative;
          &:before {
            position: absolute;
            display: block;
            content: "";
            width: 5px;
            height: 5px;
            border-radius: 30px;
            right: -30px;
            top: 44%;
            background-color: #6f747b;
          }
          &:after {
            position: absolute;
            display: block;
            content: "";
            width: 1px;
            height: 100%;
            border-radius: 30px;
            right: -28px;
            top: 44%;
            background-color: #6f747b;
          }
          &:last-child::after {
            display: none;
          }
          a {
            color: #959dab;
            font-size: 14px;
            text-decoration: none;
            height: 42px;
            display: flex;
            width: 147px;
            align-items: center;
            padding-left: 47px;
            &:hover,
            &.router-link-exact-active {
              position: relative;
              background-image: url("../../assets/images/AboutUs/图层-262.png");
              background-repeat: no-repeat;
              background-position: center;
              background-size: 100%;
              color: #86e6f6;
            }
          }
        }
      }
    }
  }
}
.global-main-detail {
  color: #959dab;
  h4 {
    font-size: 20px;
    margin-bottom: 25px;
  }
  ol {
    list-style: decimal;
    padding-left: 17px;
    li {
      margin: 9px 0;
    }
  }
}
.global-main-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  padding-left: 355px;
  padding-top: 40px;
}
.list-global {
  margin-top: 20px;
  .list-item {
    display: flex;
    align-items: center;
    padding: 28px 0;
    border-top: 1px solid #2e343c;
    h5 {
      font-size: 17px;
      margin-bottom: 15px;
    }
    &:hover > .icon {
      transform: scale(1.07);
      transform-origin: center;
    }
  }
  .icon {
    min-width: 107px;
    height: 115px;
    background-size: 100%;
    margin-right: 40px;
    transition: all ease-in-out 180ms;
  }
  .icon-more-products {
    background-image: url("../../assets/images/AboutUs/img-1.jpg");
  }
  .icon-diverse-products {
    background-image: url("../../assets/images/AboutUs/img-2.jpg");
  }
  .icon-company-information {
    background-image: url("../../assets/images/AboutUs/img-3.jpg");
  }
}
</style>
