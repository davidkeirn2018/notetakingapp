/**
 * Created by office1 on 10/8/2016.
 */
/* GET home page */
module.exports.index = function(req, res){
    res.render('index', { title: 'Home'});
};