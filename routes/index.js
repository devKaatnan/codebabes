var express = require('express');
var router = express.Router();
var matrixEig = require('matrix-eig');

var matrix = [[0, 1],[-2, -3]]
var result = matrixEig.eig(matrix);

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.send('hello world')
  console.log('index', { title: 'Express' });
});

//eigenvalues
router.get('/values', function(req, res, next){
  res.render(result.eigenvalues.real);
// Float64Array [ -1, -2 ]

// console.log(result.eigenvalues.imaginary);
// Float64Array [ 0, 0 ]

// console.log(result.eigenvectors.left);
//  Float64Array [
//       0.8944271909999159,
//       0.4472135954999579,
//       0.7071067811865475,
//       0.7071067811865475 ]

// console.log(result.eigenvectors.right);
})

module.exports = router;
