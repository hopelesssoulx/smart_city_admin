<template>
    <!-- <div>src/views/carousel/Carousel.vue</div> -->
    <div>
        <img class="img" v-for="i in images" :src="basicUrl + i.image" @dblclick="del(i.id)" />
    </div>
    <div class="upload">

        <!-- 基础上传方式 -->
        <!-- <div>
            <form method="post" enctype="multipart/form-data" action="http://127.0.0.1:3001/api/carousel/uploadImages">
                <input type="file" name="image">
                <input type="submit" value="Submit">
            </form>
        </div> -->


        <!-- abaaba -->
        <div>
            <el-form enctype="multipart/form-data">
                <el-upload class="avatar-uploader" :show-file-list="false" :http-request="beforeCoverUpload"
                    :on-change="handleimgChange" accept=".jpg, .jpeg, .png">
                    <img v-if="cover" class="avatar" :src="cover" />
                    <el-icon v-else class="avatar-uploader-icon">
                        <Plus />
                    </el-icon>
                </el-upload>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="upload()">上传</el-button>
            </span>
        </div>


        <!-- https://blog.csdn.net/qq_46747888/article/details/124178305 -->
        <!-- <div>
            <el-form enctype="multipart/form-data" label-position="left" label-width="96px" :model="PastureForm"
                style="width: 400px">
                <el-upload class="upload-pasture" ref="pastureImgUpload" accept=".jpg, .jpeg, .png" action="" :limit="2"
                    :file-list="pastureimgList" :on-change="handleimgChange" :auto-upload="false" drag>
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将图片拖到此处，或<em>点击上传</em></div>
                    <div class="el-upload__tip" slot="tip">
                        只能上传一张jpg/jpeg/png图片
                    </div>
                </el-upload>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="upload()">上传</el-button>
            </span>
        </div> -->
    </div>
</template>


<script>
import { getCarouselAddress, uploadCarouselImage, deleteCarouselImage } from '../../api/carousel'
import { ElMessage } from 'element-plus'
export default {
    data() {
        return {
            basicUrl: 'http://127.0.0.1:3001/api/carousel/getImages/',
            images: [],
            cover: '',

            // pastureimgList: [],
            imageFile: {},
        }
    },
    methods: {
        getData() {
            getCarouselAddress().then(({ data }) => {
                this.images = data.data
            })
        },
        beforeCoverUpload(file) {
            const that = this;
            let reader = new FileReader();
            reader.readAsDataURL(file.file);
            reader.onload = function (e) {
                that.cover = 'data:' + file.file.type + ';base64,' + e.target.result.split(",")[1];
            }
        },
        upload() {
            let formData = new FormData();
            // formData.append('image', this.pastureimgList[0].raw);
            formData.append('image', this.imageFile.raw)
            uploadCarouselImage(formData).then(res => {
                console.log(res);
                if (res.status == -1) {
                    ElMessage(res.data)
                } else {
                    ElMessage(res.data)
                    this.cover = ''
                    this.getData()
                }
            })
        },
        del(id) {
            deleteCarouselImage({
                "id": id
            }).then(({ data }) => {
                if (data.status === 200) {
                    ElMessage(data.msg)
                    this.getData()
                } else {
                    ElMessage(data.msg)
                }
            })
        },
        handleimgChange(file, fileList) {
            // this.pastureimgList = fileList;
            this.imageFile = file
        },
    },
    mounted() {
        this.getData()
    }
}
</script>


<style lang="less">
.img {
    max-width: 300px;
    margin-left: 30px;
}

.upload {
    .avatar-uploader .avatar {
        width: 278px;
    }
}
</style>