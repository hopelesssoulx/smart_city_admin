<template>
    <!-- <div>src/views/news/NewsList.vue</div> -->
    <div class="news-list">
        <el-table :data="newsData" stripe style="width: 100%; height: 700px;">
            <el-table-column prop="id" label="id" width="60" />
            <el-table-column prop="title" label="标题" />
            <el-table-column label="操作" width="240">
                <template #default="scope">
                    <el-button size="small" type="danger" @click="del(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>


<script>
import { getNewsList, newsDel } from '../../api/news'

export default {
    data() {
        return {
            newsData: ''
        }
    },
    methods: {
        getData() {
            let that = this
            getNewsList().then(({ data }) => {
                that.newsData = data.data
            })
        },
        edit(row) {
            console.log(row.id);
        },
        del(row) {
            // console.log(row.id);
            newsDel({
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
