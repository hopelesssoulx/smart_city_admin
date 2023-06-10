import { ax } from './request'


// 获取新闻列表
export const getNewsList = function () {
    return ax.get('/news/getNewsList');
};

// 获取已删除新闻列表
export const getDeletedNewsList = function () {
    return ax.get('/news/getDeletedNewsList');
};

// 新闻发布
export const newsPub = function (params) {
    return ax.post('./news/newsPub', params)
}

// 新闻删除
export const newsDel = function (params) {
    return ax.post('./news/newsDel', params)
}

// 新闻重发布
export const newsRePub = function (params) {
    return ax.post('./news/newsRePub', params)
}

// 获取新闻详情
export const getNewsDetail = function (params) {
    return ax.get('/news/getNewsDetail/' + params);
};

// 新闻编辑
export const newsEdit = function (params) {
    return ax.post('./news/newsEdit', params)
}

// 获取新闻分类
export const getNewsCategory = function () {
    return ax.get('./news/getNewsCategory')
}
