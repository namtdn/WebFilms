class HomeController {
    async getHome(ctx,next) {
        let nameGenre = await ctx.genreRepository.getAllGenre();
        ctx.render('homepage.html', {nameGenre});
    }

    async logout(ctx) {
        ctx.authenticator.logout();

        ctx.redirect('/login');
    }
}

module.exports = HomeController;
