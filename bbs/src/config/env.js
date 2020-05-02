
import pkg from '@/../package';


// 请求地址
const baseUrl = (function() {
    switch (process.env.NODE_ENV) {
        case 'development':
            return `http://127.0.0.1:7001/app`;
        case 'production':
            return `http://127.0.0.1:7001/app`;
        default:
            return '';
    }
})();

const iconfontUrl = `https://at.alicdn.com/t/font_1737967_97lpil0cxri.css`;

const app = {
    version: pkg.version
};

export {
    baseUrl,
    iconfontUrl,
    app
};