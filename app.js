require('dotenv').config();
const Koa             = require('koa');
const config          = require('./knexfile');
const knex            = require('knex')(config.development);
const nunjuck         = require('./nunjucks.provider');
const serve           = require('koa-static');
const path            = require('path');
const bodyParser      = require('koa-bodyparser');
const session         = require('koa-session');

const authProvider    = require('./auth/Auth.Provider');
const userProvider    = require('./user/UserProvider');
const genreProvider   = require('./genre/GenreProvider');
const hasherProvider  = require('./hasher/hasherProvider');
const routerLogin     = require('./router/RouterLogin');
const routerDashboard = require('./router/RouterDashboard');
const routerHome      = require('./router/RouterHome');
const routerFilm      = require('./router/RouterFilm');
const routerGenre     = require('./router/RouterGenre');
const routerUpload    = require('./router/RouterUpload');
const staticPath      = './views/Client';

const app = new Koa();

app.keys = ['some-secret-key'];

app.use(serve(
    path.join(__dirname, staticPath)
));
app.use(session(app));
app.use(hasherProvider(10));
app.use(bodyParser());
app.use(nunjuck());
app.use(userProvider(knex));
app.use(genreProvider(knex));
app.use(authProvider());
app.use(routerDashboard.routes());
app.use(routerLogin.routes());
app.use(routerHome.routes());
app.use(routerFilm.routes());
app.use(routerGenre.routes());
app.use(routerUpload);

app.listen(process.env.PORT, () => {
    console.log('Server listen port 5000')
});
