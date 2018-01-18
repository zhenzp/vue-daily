// 引入mockjs
const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;
// mock一组数据
const produceNewsData = function() {
    let articles = [];
    for (let i = 0; i < 10; i++) {
        let newArticleObject = {
            title: Random.ctitle(3, 5),
            text: Random.csentence(30, 50),
            author_name: Random.cname(),
            email: Random.email(),
            start_date: Random.date() + ' ' + Random.time(),
            end_date: Random.date() + ' ' + Random.time()
        };
        articles.push(newArticleObject);
    }

    return {
        articles: articles
    };
};
// mock一组数据
const imageData = function() {
    let images = [];
    for (let i = 0; i < 10; i++) {
        let imageObject = {
            id: Random.id(),
            title: Random.ctitle(3, 5),
            text: Random.csentence(5, 10),
            name: Random.cname(),
            url: Random.dataImage('200x100',"mockjs")
        };
        images.push(imageObject);
    }

    return {
        images: images
    };
};

// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/news/index', 'post', produceNewsData);
Mock.mock('/news/image', 'post', imageData);
