<template>
    <!-- <div>src/views/news/NewsEdit.vue</div> -->
    <div class="news-pub">
        <div class="news-pub-id">
            Id: <span>{{ id }}</span>
        </div>
        <div class="news-pub-title">
            标题：<el-input v-model="title" placeholder="title" style="width: 200px;" />
        </div>
        <div class="news-pub-subtitle">
            副标题：<el-input v-model="subtitle" placeholder="subtitle" style="width: 200px;" />
        </div>
        <div class="news-pub-type">
            新闻分类：<el-input v-model="type" placeholder="type" style="width: 200px;" />
        </div>
        <div class="news-pub-content">
            内容：<el-input v-model="content" type="textarea" placeholder="content" style="width: 700px;" />
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
        <el-button plain @click="save">保存</el-button>
    </div>
</template>


<script>
import { ref } from 'vue'
import { getNewsDetail, newsEdit } from '../../api/news'

export default {
    data() {
        return {
            id: ref(),
            title: ref(''),
            subtitle: ref(''),
            type: ref(),
            content: ref(''),
            cover: ref('')
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
        save() {
            let that = this
            newsEdit({
                "id": this.id,
                "title": this.title,
                "subtitle": this.subtitle,
                "type": this.type,
                "content": this.content,
                "cover": this.cover
            }).then(({ data }) => {
                if (data.status === 200) {
                    ElMessage(data.msg)
                    that.$router.go(-1)
                } else {
                    ElMessage(data.msg)
                }
            })
        },
    },
    mounted() {
        this.id = this.$route.query.id
        getNewsDetail(this.id).then(({ data }) => {
            this.title = data.data[0].title
            this.subtitle = data.data[0].subtitle
            this.content = data.data[0].content
            this.type = data.data[0].type
            this.cover = data.data[0].cover
        })
    },
}
</script>


<style lang="less" scoped>
.news-pub {
    .news-pub-id {
        margin-bottom: 30px;
    }

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
