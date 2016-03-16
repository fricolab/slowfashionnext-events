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

FlowRouter.route('/empieza_aqui', {
  name: "empieza_aqui",
  action: function(params, queryParams) {
    BlazeLayout.render("layout", {main: "instrucciones"});
  }
});

Telescope.modules.add("secondaryNav", {
  template: 'custom_menu',
  order: 1
});

Telescope.modules.remove("primaryNav","search");

Telescope.modules.remove("secondaryNav","submit_button");

Telescope.modules.add("secondaryNav", {
  template: 'search',
  order: 100
});

Telescope.modules.add("mobileNav", {
  template: 'custom_menu_mobile',
  order: 1
});

Telescope.modules.add("footer", {
  template: 'custom_footer',
  order: 1
});
