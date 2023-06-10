<template>
    <!-- <div>src/views/Home.vue</div> -->
    <div class="home">
        <div class="login" v-if="!tokenStatus()">
            用户名：<el-input v-model="username"></el-input>
            密码：<el-input v-model="password" type="password"></el-input>
            <el-button @click="loginEvent()">登录</el-button>
        </div>
        <div class="info" v-if="tokenStatus()">
            <p>{{ '用户名: ' + info.username }}</p>
            <p>{{ '邮箱: ' + info.email }}</p>
            <p>{{ '用户类型: ' + ((info.user_type == 0) ? '普通用户' : '管理员') }}</p>
            <el-button @click="logoutEvent">退出登录</el-button>
        </div>
    </div>
</template>


<script>
import { ref } from 'vue';
import { login, getUserInfo } from '../api/user'
import { getToken, setToken, rmToken } from '../api/token';

export default {
    data() {
        return {
            username: ref(''),
            password: ref(''),
            info: ref({})
        }
    },
    methods: {
        loginEvent() {
            login({
                "username": this.username,
                "password": this.password
            }).then(({ data }) => {
                if (data.user_type != 1) {
                    ElMessage('用户名或密码错误')
                } else {
                    ElMessage(data.msg)
                    setToken(data.token)
                    setTimeout(() => {
                        this.$router.go(0)
                    }, 2000);
                }
            })
        },
        logoutEvent() {
            ElMessage('已退出登录')
            rmToken('token')
            setTimeout(() => {
                this.$router.go(0)
            }, 2000);
        },
        tokenStatus() {
            return getToken()
        }
    },
    mounted() {

    },
    beforeCreate() {
        if (getToken()) {
            getUserInfo().then(({ data }) => {
                this.info = data.data[0]
            })
        }
    }
}
</script>


<style lang="less" scoped>
.home {
    margin-left: 200px;
    margin-top: 200px;

    .login {
        margin: 10px;

        .el-input {
            width: 200px;
        }
    }
}
</style>
