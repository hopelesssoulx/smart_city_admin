<template>
    <div class="common-layout">
        <el-container>
            <el-aside width="200px">
                <common-aside />
            </el-aside>
            <el-container>
                <el-header>
                    <common-header />
                </el-header>
                <el-main>
                    <!-- <common-tag /> -->
                    <router-view class="router-view" />
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>


<script>
import CommonAside from '../components/CommonAside.vue';
import CommonHeader from '../components/CommonHeader.vue';
import CommonTag from '../components/CommonTag.vue';
export default {

}
</script>


<style lang="less" scoped>
.el-header {
    padding: 0;
}

.router-view {
    margin: 30px;
}
</style>
