FlowRouter.route('/', {
  name: "welcome",
  action: function(params, queryParams) {
    BlazeLayout.render("layout", {main: "welcome"});
  }
});

FlowRouter.route('/foro', {
  name: "postsDefault",
  action: function(params, queryParams) {
    BlazeLayout.render("layout", {main: "main_posts_list"});
  }
});

Telescope.modules.add("primaryNav", {
  template: 'custom_menu',
  order: 100
});

Telescope.modules.add("mobileNav", {
  template: 'custom_menu',
  order: 1
});
