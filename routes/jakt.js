
/*** Render page or redirect to login ***/
exports.index = function(req, res) {
  var person = req.query.p;
  res.render("jakt", {
    person:person
  });
};

