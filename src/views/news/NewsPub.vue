<template>
    <!-- <div>src/views/news/NewsPub.vue</div> -->
    <div class="news-pub">
        <div class="news-pub-title">
            标题：<el-input v-model="title" placeholder="title" style="width: 200px;" />
        </div>
        <div class="news-pub-subtitle">
            副标题：<el-input v-model="subtitle" placeholder="subtitle" style="width: 200px;" />
        </div>
        <div class="news-pub-type">
            <!-- 资讯分类：<el-input v-model="type" placeholder="type" style="width: 200px;" /> -->
            资讯分类:
            <el-select v-model="type" placeholder="选择资讯分类">
                <el-option v-for="item in newsCategory" :key="item.id" :label="item.news_category" :value="item.id" />
            </el-select>
        </div>
        <div class="news-pub-content">
            内容：<el-input v-model="content" type="textarea" placeholder="content" style="width: 700px;" :rows="16" />
        </div>
        <div class="news-pub-cover">
            封面图：
            <el-upload class="avatar-uploader" :show-file-list="false" :http-request="beforeCoverUpload">
                <img v-if="cover" class="avatar" :src="cover" />
                <el-icon v-else class="avatar-uploader-icon">
                    <Plus />
                </el-icon>
            </el-upload>
        </div>

        <br />
        <el-button plain @click="pub">发布</el-button>
    </div>
</template>


<script>
import { ref } from 'vue'
import { newsPub, getNewsCategory } from '../../api/news';
import { ElMessage } from 'element-plus';
export default {
    data() {
        return {
            title: ref(''),
            subtitle: ref(''),
            type: ref(''),
            content: ref(''),
            cover: ref(''),

            newsCategory: ref([]),
        }
    },
    methods: {
        beforeCoverUpload(file) {
            const that = this;
            let reader = new FileReader();
            reader.readAsDataURL(file.file);
            reader.onload = function (e) {
                that.cover = 'data:' + file.file.type + ';base64,' + e.target.result.split(",")[1];
            }
        },
        pub() {
            if (this.title == '' || this.type == '' || this.content == '' || this.cover == '') {
                ElMessage('各信息不能为空')
                return
            }
            let that = this
            newsPub({
                "title": this.title,
                "subtitle": this.subtitle,
                "type": this.type,
                "content": this.content,
                "cover": this.cover
            }).then(({ data }) => {
                if (data.status === 200) {
                    ElMessage(data.msg)
                    that.$router.push('/news/newsList')
                } else {
                    ElMessage(data.msg)
                }
            })
        },
    },
    mounted() {
        getNewsCategory().then(({ data }) => {
            this.newsCategory = data.data
        })
    }
}
</script>


<style lang="less" scoped>
.news-pub {
    .news-pub-title {
        margin-bottom: 30px;
    }

    .news-pub-subtitle {
        margin-bottom: 30px;
    }

    .news-pub-type {
        margin-bottom: 30px;
    }

    .news-pub-content {
        margin-bottom: 30px;
    }

    .news-pub-cover {
        .avatar-uploader .avatar {
            width: 278px;
            display: block;
        }
    }
}
</style>
