<template>
  <div id="jianing" class="p-4">
    <div class="row pl-3 baihe">
      香槟色的百合,是你喜欢的花儿
    </div>
    <div class="row p-3">
      <div class="col-md-2" v-for="(img,index) in img" :key="index">
        <div class="photo-border">
          <i class="fa fa-heartbeat text-danger" aria-hidden="true"></i>
          <router-link :to="img.link">
            <img v-lazy="img.src" alt="" class="photo-img">
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "jianing",
  data() {
    return {
      img: [
        // { src: require("@/assets/img/jn/13.jpg") },
        { src: require("@/assets/img/20180405/57.jpg"),link:'photo/qingming' }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
#jianing {
  .baihe {
    color: rgb(233, 233, 79);
  }
  .photo-border {
    position: relative;
    border: 2px solid #fff;
    // height: 386px;
    // overflow: hidden;
    .fa-heartbeat {
      position: absolute;
      top: -12px;
      right: -12px;
      transform: rotate(45deg);
    }
    .photo-img {
      width: 100%;
      vertical-align: top;
    }
  }
}
</style>
