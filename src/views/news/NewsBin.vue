<template>
    <!-- <div>src/views/news/NewsBin.vue</div> -->
    <div class="news-list">
        <el-table :data="newsData" stripe style="width: 100%; height: 700px;">
            <el-table-column prop="id" label="id" width="60" />
            <el-table-column prop="title" label="标题" />
            <el-table-column label="操作" width="240">
                <template #default="scope">
                    <el-button size="small" @click="edit(scope.row)">编辑</el-button>
                    <el-button size="small" @click="rePub(scope.row)">重发布</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>


<script>
import { getDeletedNewsList, newsRePub } from '../../api/news'

export default {
    data() {
        return {
            newsData: ''
        }
    },
    methods: {
        getData() {
            let that = this
            getDeletedNewsList().then(({ data }) => {
                that.newsData = data.data
            })
            // let that = this
            // axios.get('http://127.0.0.1:3001/api/news/getNewsList', {
            //     params: {
            //         // title: '世界'
            //         // type: 22
            //     }
            // })
            //     .then(function (response) {
            //         // console.log(response);
            //         // console.log(response.data.data);
            //         that.newsData = response.data.data
            //     })
            //     .catch(function (error) {
            //         console.log(error);
            //     })
            //     .finally(function () {
            //     });
        },
        edit(row) {
            let that = this
            that.$router.push({ path: 'newsEdit', query: { id: row.id } })
        },
        rePub(row) {
            newsRePub({
                "id": row.id
            }).then(({ data }) => {
                if (data.status === 200) {
                    ElMessage(data.msg)
                    this.getData()
                } else {
                    ElMessage(data.msg)
                }
            })
        }
    },
    mounted() {
        this.getData()
    }
}
</script>


<style scoped>
.news-list {
    margin-left: 30px;
    margin-top: 30px;
}
</style>
