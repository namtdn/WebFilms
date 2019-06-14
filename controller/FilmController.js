class FilmController {
    async getFilm(ctx) {
        // let films  = await ctx.filmRepository.getAllFilm();
        let genres = await ctx.genreRepository.getAllGenre();
        ctx.render('single.html', {genres});
    }
}

module.exports = FilmController;