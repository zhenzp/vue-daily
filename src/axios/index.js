import axios from 'axios';
import { Message } from 'iview';
//1

// 请求时拦截
axios.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// 请求完成后拦截
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        // 统一捕获错误
        if (error.response.status == 500) {
            console.log('500啦，可能是后端的锅');
            // Message.error({
            //     content: '500啦，可能是后端的锅' + error.response.data.message,
            //     duration: 3
            // });
        } else if (error.response.status == 401) {
            console.log('401啦，没权限，可能没登录');
            // Message.error({
            //     content:
            //         '401啦，没权限，可能没登录' + error.response.data.message,
            //     duration: 3
            // });
        } else if (error.response.status == 404) {
            console.log('404啦，没找到，可能是接口地址写错了');
            // Message.error({
            //     content:
            //         '404啦，没找到，可能是接口地址写错了' +
            //         error.response.data.message,
            //     duration: 3
            // });
        } else if (error.response.status == 400) {
            Message.error({
                content: error.response.data.message,
                duration: 3
            });
        }
        return Promise.resolve(error.response);
    }
);
// 封装axios的post请求
export default function fetch(url, params) {
    return new Promise((resolve, reject) => {
        axios
            .post(url, params)
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                reject(error);
            });
    });
}
