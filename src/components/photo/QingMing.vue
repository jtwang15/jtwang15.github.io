<template>
    <div class="qingming">
        <el-carousel :interval="1000" type="card" height="100vh" :autoplay="false">
            <el-carousel-item v-for="(img,index) in imgs" :key="index">
                <img v-lazy="img.src" alt="" class="photo-img">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>
<script>
export default {
  name: "qingming",
  data() {
    return {
      imgs: [
      ]
    };
  },
  methods: {
    getImgs() {
      for (let i = 1; i < 71; i++) {
        const img = { src: require(`@/assets/img/20180405/${i}.jpg`) };
        this.imgs.push(img);
      }
    }
  },
  mounted() {
    this.getImgs();
  }
};
</script>
<style lang="scss" scoped>
.qingming {
  .photo-img {
    max-height: 80vh;
  }
}
</style>

