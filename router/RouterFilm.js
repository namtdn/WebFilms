const Router = require('koa-router');
const FilmController = require('../controller/FilmController');

const router = new Router();
const filmController = new FilmController();

router.get('/films', filmController.getFilm);

module.exports = router;