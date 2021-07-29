var express = require('express');
var router = express.Router();
app = express()
var matrixEig = require('matrix-eig');

var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.array());



// var matrix = [[0, 1],[-2, -3]]
// var result = matrixEig.eig(matrix);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index')
  var matrix = [[0, 1],[-2, -3]];
  var result = matrixEig.eig(matrix);
  var val = result.eigenvalues.real
console.log(typeof(matrix));
});

//eigenvalues
router.get('/values', function(req, res, next){
  res.render('values');
});

router.post('/eigen', function(req,res){
      var mat2 = req.body.eigen;
      var mat3 = JSON.parse(mat2)
      var result = matrixEig.eig(mat3);
      var eigenvalue = result.eigenvalues.real;
      var eigenvector = result.eigenvectors.right;
      res.render('eigen', {mat2:mat2, eigenvalue:eigenvalue, eigenvector:eigenvector});
      console.log("worked"+ typeof(mat3));
      console.log('eigenvalue'+eigenvalue);
    });

router.get('/determinant', function(req, res, next){
  res.render('determinant');
  // console.log('matrix', req.bodyParser.matrix);
});

router.post('/det', function(req,res){
      var mat = req.body.matrix;
      // res.send("New employee has been added  = "+mat);
      res.render('det', {mat:mat})

    });
// app.post('/determinant', function(req, res){
//    console.log(req.body);
//    res.send("recieved your request!");
// });
// console.log(result.eigenvalues.imaginary);
// Float64Array [ 0, 0 ]

// console.log(result.eigenvectors.left);
//  Float64Array [
//       0.8944271909999159,
//       0.4472135954999579,
//       0.7071067811865475,
//       0.7071067811865475 ]

// console.log(result.eigenvectors.right);

module.exports = router;
