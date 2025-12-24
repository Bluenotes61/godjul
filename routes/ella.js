
/*** Render page or redirect to login ***/
exports.index = function(req, res) {
  res.render("jakt", {
    person:'Ella'
  });
};

