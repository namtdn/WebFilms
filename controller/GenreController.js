class GenreController {
    async getGenreById(ctx, next) {
        let genres    = await ctx.genreRepository.getAllGenre();
        let nameGenre = await ctx.genreRepository.findGenreById(ctx.params.id);
        // let films     = await ctx.filmRepository.findFilmById(ctx.params.id);
        ctx.render('genres.html', {nameGenre, genres});
    }
}

module.exports = GenreController;