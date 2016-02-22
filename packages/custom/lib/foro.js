FlowRouter.route('/foro', {
  name: "postsDefault",
  action: function(params, queryParams) {
    BlazeLayout.render("layout", {main: "main_posts_list"});
  }
});

Telescope.modules.add("primaryNav", {
  template: 'foro_menu',
  order: 100
});

Telescope.modules.add("mobileNav", {
  template: 'foro_menu',
  order: 1
});
