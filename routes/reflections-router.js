const ReflectionController = require('../controllers/reflection-controller');

const router = require('express').Router();


router.post("/api/v1/reflections", ReflectionController.create);
router.get("/api/v1/reflections", ReflectionController.find);


module.exports = router;