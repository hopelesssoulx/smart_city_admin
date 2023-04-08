import { ax } from './request'


//  登录
export const login = function (params) {
    return ax.post('/user/login', params);
};

// 获取用户信息
export const getUserInfo = function () {
    return ax.get('/user/getUserInfo');
};
