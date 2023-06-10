<template>
    <!-- <div>src/components/CommonAside.vue</div> -->
    <div>

        <el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo" default-active="1"
            text-color="#fff" @open="" @close="">
            <!-- <el-menu-item index="1">
                <el-icon>
                    <house />
                </el-icon>
                <span>主页</span>
            </el-menu-item>
            <el-sub-menu index="2">
                <template #title>
                    <el-icon>
                        <Document />
                    </el-icon>
                    <span>资讯管理</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="1-1" @click="clickMenu()">资讯列表</el-menu-item>
                    <el-menu-item index="1-2">资讯发布</el-menu-item>
                    <el-menu-item index="1-3">回收站</el-menu-item>
                </el-menu-item-group>
            </el-sub-menu>
            <el-sub-menu index="3">
                <template #title>
                    <el-icon>
                        <user />
                    </el-icon>
                    <span>用户管理</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="2-1">item one</el-menu-item>
                    <el-menu-item index="2-2">item two</el-menu-item>
                </el-menu-item-group>
            </el-sub-menu> -->

            <el-menu-item @click="clickMenu(item)" v-for="item in noChildren" :index="item.label" :key="item.label">
                <el-icon>
                    <component :key="item.label" :is="item.icon" style="width: 20px; height:20px;" />
                </el-icon>
                <span>{{ item.label }}</span>
            </el-menu-item>
            <el-sub-menu v-for="item in hasChildren" :index="item.label" :key="item.label">
                <template #title>
                    <el-icon>
                        <component :key="item.label" :is="item.icon" style="width: 20px; height:20px;" />
                    </el-icon>
                    <span>{{ item.label }}</span>
                </template>
                <el-menu-item-group v-for="subItem in item.children">
                    <el-menu-item @click="clickMenu(subItem)" :index="subItem.name">{{ subItem.label }}</el-menu-item>
                </el-menu-item-group>
            </el-sub-menu>

        </el-menu>

    </div>
</template>


<script>
export default {
    data() {
        return {
            menuData: [
                {
                    path: '/',
                    name: 'home',
                    label: '首页',
                    icon: 'house',
                    url: 'Home/Home'
                },
                {
                    label: '资讯管理',
                    icon: 'document',
                    children: [
                        {
                            path: '/news/newsList',
                            name: 'newsList',
                            label: '资讯列表',
                            url: 'news/newsList'
                        },
                        {
                            path: '/news/newsPub',
                            name: 'newsPub',
                            label: '资讯发布',
                            url: 'news/newsPub'
                        },
                        {
                            path: '/news/newsBin',
                            name: 'newsBin',
                            label: '草稿',
                            url: 'news/newsBin'
                        }
                    ]
                },
                {
                    path: '/carousel/carousel',
                    name: 'carousel',
                    label: '主页轮播图管理',
                    icon: 'picture',
                    url: '/carousel/carousel'
                },
                // {
                //     label: '用户管理',
                //     icon: 'user',
                //     children: [
                //         {
                //             path: '/user/userList',
                //             name: 'userList',
                //             label: '用户列表',
                //             url: 'user/userList'
                //         }
                //     ]
                // },
            ]
        }
    },
    methods: {
        clickMenu(i) {
            // this.$router.push('/news/newsList')
            this.$router.push(i.path)
        }
    },
    mounted() {

    },
    computed: {
        // 没有子菜单
        noChildren() {
            return this.menuData.filter(item => !item.children)
        },
        // 有子菜单
        hasChildren() {
            return this.menuData.filter(item => item.children)
        },
    }
}

</script>


<style scoped>
.el-menu {
    height: 100vh;
    border: none;
}
</style>
