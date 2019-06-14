class DashboardController {
    async getDashboard(ctx, next) {
        ctx.render('Admin/index.html');
    }

    async logout(ctx) {
        ctx.authenticator.logout();

        ctx.redirect('/login');
    }
}

module.exports = DashboardController;