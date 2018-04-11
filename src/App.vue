<template>
  <div id="app" ref="apps" :style="{background: 'url('+ img +')',backgroundSize:'cover',backgroundRepeat:'no-repeat'}">
    <div class="main">
      <ul class="main-nav">
        <li class="text-center">
          <router-link to="/">
            <img src="./assets/img/lily.png" alt="">
          </router-link>
        </li>
        <li>
          <router-link to="/">
            <div>
              <i class="fa fa-firefox"></i>
              <span>前端有关</span>
            </div>
          </router-link>
        </li>
        <!-- <li>
          <router-link to="/jianing">
            <div>
              <i class="fa fa-heart text-danger" aria-hidden="true"></i>
              <span class="text-danger">挚</span>
            </div>
          </router-link>
        </li> -->
      </ul>
    </div>
    <router-view class="router p-2"></router-view>
    <div class="btn-group-sm">
      <button type="button" class="btn btn-light" @click="getImg('add')">
        <i class="el-icon-arrow-left"></i>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      img: "http://api.dujin.org/bing/1366.php",
      day: 0
    };
  },
  methods: {
    getImg(val) {
      let that = this;
      this.day++;
      this.$http
        .get("/apis/HPImageArchive.aspx?format=js&idx=" + this.day + "&n=1")
        .then(res => {
          let imgurl = "https:www.bing.com" + res.data.images[0].url;
          let newImage = new Image(0, 0);
          newImage.src = imgurl;
          newImage.onload = function() {
            that.img = imgurl;
          };
        });
    }
  }
};
</script>

<style>
html,
body,
div,
span,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
abbr,
address,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
samp,
small,
strong,
sub,
sup,
var,
b,
i,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
}

body {
  line-height: 1;
}

:focus {
  outline: 1;
}

article,
aside,
canvas,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section,
summary {
  display: block;
}

nav ul,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}

a {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}

ins {
  background-color: #ff9;
  color: #000;
  text-decoration: none;
}

mark {
  background-color: #ff9;
  color: #000;
  font-style: italic;
  font-weight: bold;
}

del {
  text-decoration: line-through;
}

abbr[title],
dfn[title] {
  border-bottom: 1px dotted #000;
  cursor: help;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

hr {
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #cccccc;
  margin: 1em 0;
  padding: 0;
}

input,
select {
  vertical-align: middle;
}
html,
body {
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  overflow-x: hidden;
}
.f12 {
  font-size: 12px;
}
.f14 {
  font-size: 14px;
}
.f16 {
  font-size: 16px;
}
</style>
<style lang="scss" scoped>
#app {
  width: 100vw;
  height: 100vh;
  position: relative;
  .btn-group-sm {
    position: absolute;
    bottom: 50px;
    right: 50px;
  }
  .btn-light.focus,
  .btn-light:focus {
    box-shadow: none;
    border-color: lightseagreen;
  }
  .main {
    .main-nav {
      position: fixed;
      top: 0;
      left: 0;
      width: 200px;
      height: 100vh;
      background: rgba(128, 222, 234, 0.6);
      > li:not(:first-child) {
        border-top: 1px solid rgb(38, 198, 218);
        padding: 0 20px;
        &:hover {
          background: rgb(63, 215, 235);
        }
      }
      > li {
        height: 40px;
        line-height: 40px;
      }
    }
  }
  .router {
    width: calc(100vw - 200px);
    min-height: 100vh;
    margin-left: 200px;
    background: rgba(255, 255, 255, 0.24);
  }
}
</style>

