
/*
 * GET home page.
 */

exports.index = function(req, res){
    //res.end('Hello ok!');
  res.render('index', { title: 'Express', user:{name:'Max', position:'<i>Architect</i>'} });
};