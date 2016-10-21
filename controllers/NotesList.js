/**
 * Created by office1 on 10/9/2016.
 */

module.exports.login = function(reg, res){
    res.render('index', { title: 'Login'});
};
/* GET 'Notes List' page */
module.exports.notes = function(req, res){
    res.render('index', { title: 'Notes List'});
};
/* Add or Edit page */
module.exports.editNotes = function(req, res){
    res.render('index', { title: 'Add or Edit Note'});
};