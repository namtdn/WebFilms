const Router = require('koa-router');
const HomeController = require('../controller/HomeController');
const loginRequiredMiddleware = require('../middleware/logginRequiredMiddleware');

const router = new Router();
const homeController = new HomeController();

router.get('/home',loginRequiredMiddleware, homeController.getHome);

router.get('/logout', homeController.logout);

module.exports = router;
