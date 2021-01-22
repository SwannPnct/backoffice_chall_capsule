var express = require('express');
var router = express.Router();

const ContactModel = require('./model/schemodel');


router.get('/', async function(req, res, next) {
  res.render('index', { contactList : await ContactModel.find() });
});

router.get("/new", (req,res,next) => {
  res.render('new', { });
})

router.post("/add-new", async (req,res,next) => {

  const email_check = await ContactModel.findOne({email: req.body.email});

  if (email_check) {
    res.redirect('/new');
    return;
  }

    const newContact = new ContactModel({
      lastname: req.body.lastname,
      firstname: req.body.firstname,
      email: req.body.email,
      age: req.body.age,
      type: req.body.type
    });
    const contactSaved = await newContact.save();
    res.redirect('/');
})

router.get('/delete', async (req,res,next) => {
  await ContactModel.deleteOne({_id : req.query.id});
  res.redirect('/');
})

router.get('/edit', async (req,res,next) => {
  res.render('edit', {contact : await ContactModel.findById(req.query.id)});
})

router.post('/edit-contact', async (req,res,next) => {
  await ContactModel.updateOne({_id: req.body.id}, {
      lastname: req.body.lastname,
      firstname: req.body.firstname,
      email: req.body.email,
      age: req.body.age,
      type: req.body.type
  });
  res.redirect('/');
})

module.exports = router;
