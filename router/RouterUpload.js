const Router  = require('koa-router');
const multer  = require('koa-multer');

const storage = multer.diskStorage({

    destination: function (req, file, cb) {
        cb(null, 'uploadedFiles/')
    },

    filename: function (req, file, cb) {
        var fileFormat = (file.originalname).split(".");
        cb(null, Date.now() + "." + fileFormat[fileFormat.length - 1]);
    }
    })

const upload  = multer({ storage: storage });
const router  = new Router();

router
    .get('/uploadFile', async (ctx, next) => {
        ctx.render('index.html', true);
        await next()
    })
    .post('/uploadFile', upload.single('file'), async (ctx) => {
        let file = ctx.req.file;
        console.log(file);
        return ctx.render('file.html', { file });
    });

module.exports = router.routes();