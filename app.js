const http = require('http');
const url = require('url');

http.createServer((request, response) => {
    const requestUrl = url.parse(request.url, true);

    if (request.method === 'GET') {
        switch (requestUrl.path) {
            case '/' :
                homepage(request, response, 'homepage');
                break;
            case '/about' :
                homepage(request, response, 'about');
                break;
            default:
                homepage(request, response, '404 not found');
        }
    }

    if (request.method === 'POST') {
        switch (requestUrl.path) {
            case '/about' :
                homepage(request, response, 'about post');
                break;
            default:
                homepage(request, response, '404 not found');
        }
    }
}).listen(3000);

const homepage = (req, res, message) => {
    res.end(message);
};