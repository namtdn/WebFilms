const FilmRepository = require('./FilmRepository');

module.exports = (databaseConnect) => {
    return async (ctx, next) => {
        let filmRepository = new FilmRepository(databaseConnect);
        ctx.filmRepository = filmRepository;
        await next();
    }
}
