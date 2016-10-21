var express = require('express');
var router = express.Router();
var cntrlHome = require('../controllers/NotesList');
var cntrlNotesList = require('../controllers/NotesList');
var cntrlMain = require('../controllers/main');

/* Notes Editor Pages */
<<<<<<< HEAD

=======
>>>>>>> origin/master
router.get('/login', cntrlNotesList.login);
router.get('/notes', cntrlNotesList.notes);
router.get('/notes/editor', cntrlNotesList.editNotes);

var homepageController = function (req, res){
  res.render('index', { title: 'Note Taking App - Login'})
};

/* GET home page. */

router.get('/', cntrlMain.index);

module.exports = router;
