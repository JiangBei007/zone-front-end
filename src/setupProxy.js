const proxy = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(proxy('/signin', {
        target: 'http://127.0.0.1:9000',
        pathRewrite: {
            "^/signin": "/signin"
        }
    }));
    app.use(proxy('/signout', {
        target: 'http://127.0.0.1:9000',
        pathRewrite: {
            "^/signout": "/signout"
        }
    }));
	app.use(proxy('/register', {
	    target: 'http://127.0.0.1:9000',
	    pathRewrite: {
	        "^/register": "/register"
	    }
	}));
	app.use(proxy('/loginStatus', {
	    target: 'http://127.0.0.1:9000',
	    pathRewrite: {
	        "^/loginStatus": "/loginStatus"
	    }
	}));
};