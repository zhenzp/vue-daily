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

// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/news/index', 'post', produceNewsData);
