const UsersController = require('../controllers/users-controller');

const router = require('express').Router();


router.post("/api/v1/users/register", UsersController.register);
router.post("/api/v1/users/login", UsersController.login);


module.exports = router;