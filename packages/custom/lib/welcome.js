FlowRouter.route('/', {
  name: "welcome",
  action: function(params, queryParams) {
    BlazeLayout.render("layout", {main: "welcome"});
  }
});
