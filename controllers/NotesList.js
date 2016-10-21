<<<<<<< HEAD
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
=======
/**
 * Created by office1 on 10/9/2016.
 */


/* GET Login, Notes List, Editor Page */

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
>>>>>>> origin/master
};