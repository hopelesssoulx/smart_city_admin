import { ax } from './request'


// 获取轮播图地址
export const getCarouselAddress = function () {
    return ax.get('/carousel/getCarouselImages');
};


// 上传轮播图
export const uploadCarouselImage = function (params) {
    return ax.post('/carousel/uploadImages', params, {
        headers: { "Content-Type": "multipart/form-data" }
    });
};

// 删除轮播图
export const deleteCarouselImage = function (params) {
    return ax.post('/carousel/deleteImages', params)
}
