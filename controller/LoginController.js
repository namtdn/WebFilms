class LoginController {

    async getLogin(ctx) {
        if (ctx.authenticator.check()) {
            return ctx.redirect('/home');
        }

        ctx.render('login.html', true);
    }

    async postLogin(ctx, next) {
        const {userName, password} = ctx.request.body;
        try {
            let user = await ctx.authenticator.attempt(userName, password);
            ctx.authenticator.login(user);
            ctx.redirect('/home');

        } catch(e) {
            return ctx.redirect('/login');
        }
        
    }
}

module.exports = LoginController;