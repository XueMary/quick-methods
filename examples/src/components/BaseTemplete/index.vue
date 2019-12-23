<template>
  <div>
    <div class="title">
      <slot name="title"></slot>
    </div>
    <div class="templete-box">
      <div class="content">
        <slot name="content"></slot>
      </div>
      <div class="code" ref="code">
        <slot name="code"></slot>
      </div>
      <div class="switch" @click="changeSwitch">{{switchTxt}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false
    };
  },
  computed: {
    switchTxt() {
      return this.isShow === true ? "隐藏代码" : "显示代码";
    }
  },
  methods: {
    getTargetChildrenHeight(target) {
      return target.children[0].clientHeight;
    },
    changeSwitch() {
      this.isShow = !this.isShow;
      let target = this.$refs.code;
      if (this.isShow === true) {
        let height = this.getTargetChildrenHeight(target);
        target.style.height = height + "px";
      } else {
        target.style.height = 0;
      }
    }
  }
};
</script>

<style scoped>
.title {
  font-size: 18px;
  margin-bottom: 10px;
}
.templete-box {
  border: 1px solid #eaeefb;
  border-radius: 6px;
  background: #fff;
}
.content {
  padding: 24px;
}
.code {
  background-color: #fafafa;
  border-top: 1px solid #eaeefb;
  overflow: hidden;
  height: 0;
  transition: height 0.2s;
}
.switch {
  text-align: center;
  line-height: 44px;
  color: #409eff;
  font-size: 12px;
  cursor: pointer;
}
</style>
