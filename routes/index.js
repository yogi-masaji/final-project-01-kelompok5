const router = require('express').Router();
const usersRouter = require('./users-router');
const errorMiddleware = require('../middlewares/error-middleware');
const authMiddleware = require('../middlewares/auth-middleware');


router.use(usersRouter);

router.get('/test', authMiddleware, function(req, res){
    res.status(200).json({
        "email": req.user.email //from middleware
    })
})

router.use((req, res, next) => {
  next({ name: 'PageNotFound' });
});

router.use(errorMiddleware);

module.exports = router;