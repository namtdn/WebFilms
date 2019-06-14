const GenreRepository = require('./GenreRepository');

module.exports =  (databaseConnect) => {
    return async (ctx, next) => {
        let genreRepository = new GenreRepository(databaseConnect);
        ctx.genreRepository = genreRepository;
        await next();
    }
}