const Router = require('koa-router');
const GenreController = require('../controller/GenreController');

const router = new Router();
const genreController = new GenreController();

router.get('/:id', genreController.getGenreById);

module.exports = router;