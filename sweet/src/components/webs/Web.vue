<template>
    <div class="web row">
        <div class="col-md-3 p-5">
            <section class="sections">
                <p class='f16'>
                    <i class="fa fa-paper-plane-o text-primary" aria-hidden="true"></i>
                    web开发文档:</p>
                <ul>
                    <li class="m-3">
                        <a href="https://developer.mozilla.org/zh-CN/">
                            <!-- <img src="" alt="" style="width:20px;"> -->
                            <span class="mdn tags"></span>
                            <span>MDN</span>
                        </a>
                    </li>
                    <li class="m-3">
                        <a href="http://es6.ruanyifeng.com/">
                            <span class="es6 tags">ES</span>
                            ECMAScript 6 入门
                        </a>
                    </li>
                    <li class="m-3">
                        <a href="http://es6.ruanyifeng.com/">
                            <span class="bt4 tags">B</span>
                            BootStrap 4
                        </a>
                    </li>
                    <li class="m-3">
                        <a href="https://www.lodashjs.com/">
                            <span class=" lo tags"></span>
                            Lodash
                        </a>
                    </li>
                    <li class="m-3">
                        <a href="https://www.tslang.cn/docs/home.html">
                            <span class=" ts tags">TS</span>
                            TypeScript
                        </a>
                    </li>
                    <li class="m-3">
                        <a href="https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000">
                            <span class="liao tags">
                            </span>
                            廖雪峰JS教程
                        </a>
                    </li>
                </ul>
            </section>
        </div>
        <div class="col-md-3 p-5">
            <section class="sections">
                <p class='f16'>
                    <i class="fa fa-diamond text-warning" aria-hidden="true"></i>
                    相关网站:</p>
                <ul>
                    <li class="m-3">
                        <a href="https://scriptoj.com/">
                            <span class="scriptOj tags"></span>
                            scriptOj(JS精华题库)
                        </a>
                    </li>
                    <li class="m-3">
                        <a href="https://www.fundebug.com/">
                            <span class="fundebug tags"></span>
                            FunDebug
                        </a>
                    </li>
                    <li class="m-3">
                        <a href="https://juejin.im/post/5a0c1956f265da430a501f51">
                            <span class="juejin tags"></span>
                            个人学习资源分享
                        </a>
                    </li>
                    <li class="m-3">
                        <a href="https://juejin.im/post/5965943ff265da6c30653879">
                            <span class="juejin tags"></span>
                            正则
                        </a>
                    </li>
                    <li class="m-3">
                        <a href="http://menvscode.com/">
                            <span class="menvscode">MVC</span>
                            MVC前端网
                        </a>
                    </li>
                    <li class="m-3">
                        <a href="http://caibaojian.com/">
                            <span class="caibaojian tags"></span>
                            前端开发者博客
                        </a>
                    </li>
                </ul>
            </section>
        </div>
        <div class="col-md-3 p-5">
            <section class="sections">
                <p class="f16">
                    <i class="fa fa-video-camera text-success" aria-hidden="true"></i>
                    视频网站:
                </p>
                <ul>
                    <li class="m-3">
                        <a href="https://ke.qq.com/teacher/27732357">
                            <span class="teacher tags"></span>
                            米斯特吴(Vue,Ng,Node)
                        </a>
                    </li>
                    <li class="m-3">
                        <a href="https://www.itying.com/">
                            <span class="itying tags"></span>
                            IT 营
                        </a>
                    </li>
                </ul>
            </section>

        </div>
    </div>
</template>
<script>
export default {
  name: "web",
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.web {
  .sections {
    a {
      color: #222;
      &:hover {
        color: #ccc;
      }
    }
    .tags {
      display: inline-block;
      width: 20px;
      height: 20px;
      text-align: center;
      color: #222;
    }
    .mdn {
      background: url("https://cdn.mdn.mozilla.net/static/img/favicon32.7f3da72dcea1.png")
        center center no-repeat;
      background-size: 20px 20px;
    }
    .es6 {
      background: rgb(203, 248, 2);
    }
    .bt4 {
      color: #fff;
      background: #170a38;
    }
    .lo {
      display: inline-block;
      width: 20px;
      border-bottom: 2px solid #3492ff;
    }
    .ts {
      background: #337ab7;
    }
    .liao {
      background: url("https://www.liaoxuefeng.com/favicon.ico") center center
        no-repeat;
      background-size: 20px 20px;
    }
    .scriptOj {
      background: url("https://scriptoj.com/favicon.ico") center center
        no-repeat;
      background-size: 20px 20px;
    }
    .fundebug {
      background: url("https://www.fundebug.com/favicon.ico") center center
        no-repeat;
      background-size: 20px 20px;
    }
    .juejin {
      background: url("https://juejin.im/favicon.ico") center no-repeat;
      background-size: 20px 20px;
    }
    .menvscode {
      color: #3498db;
      font-family: "KaiTi";
      font-weight: 600;
    }
    .caibaojian {
      background: url("http://caibaojian.com/favicon.ico") center no-repeat;
      background-size: 20px 20px;
    }
    .teacher {
      background: url("https://ke.qq.com/favicon.ico") center no-repeat;
      background-size: 20px 20px;
    }
    .itying {
      background: url("https://www.itying.com/favicon.ico") center no-repeat;
      background-size: 20px 20px;
    }
  }
}
</style>

