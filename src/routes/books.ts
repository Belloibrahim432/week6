import express from 'express';
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource from books');
});
/* POST users listing. */
// router.post('/', function(req, res, next) {
//   res.send('respond with a resource from books');
// });

export default router;
