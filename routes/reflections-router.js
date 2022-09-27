const ReflectionController = require('../controllers/reflection-controller');

const router = require('express').Router();


router.post("/api/v1/reflections", ReflectionController.create);
router.get("/api/v1/reflections", ReflectionController.find);
router.delete("/api/v1/reflections/:id", ReflectionController.delete);
router.put("/api/v1/reflections/:id", ReflectionController.update)

module.exports = router;