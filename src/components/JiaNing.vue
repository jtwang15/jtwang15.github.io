<template>
    <div id="jianing" class="p-4">
        <div class="row pl-3 baihe">
            香槟色的百合,是你喜欢的花儿
        </div>
        <div class="row p-3">
            <div class="col-md-2">
                <div class="photo-border">
                    <i class="fa fa-heartbeat text-danger" aria-hidden="true"></i>
                    <img v-lazy="img[0].src" alt="" class="photo-img">
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
      img: [{ src: require("@/assets/jn/13.jpg") }],
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
    height: 386px;
    .fa-heartbeat {
      position: absolute;
      top: -12px;
      right: -12px;
      transform: rotate(45deg);
    }
    .photo-img{
        width: 100%;
    }
  }
}
</style>
