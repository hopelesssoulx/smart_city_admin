<template>
  <!-- <div>src/App.vue</div> -->
  <!-- <router-link to="/">to "/"</router-link> -->
  <router-view />
</template>


<script>
export default {

}
</script>


<style lang="less">
html,
body {
  margin: 0;
  padding: 0;
}
</style>


<style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>
