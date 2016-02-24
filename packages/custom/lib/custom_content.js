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

FlowRouter.route('/programa', {
  name: "programa",
  action: function(params, queryParams) {
    BlazeLayout.render("layout", {main: "programa"});
  }
});

Telescope.modules.add("primaryNav", {
  template: 'custom_menu',
  order: 1
});

Telescope.modules.add("mobileNav", {
  template: 'custom_menu_mobile',
  order: 1
});
