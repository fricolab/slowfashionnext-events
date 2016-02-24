Package.describe({
  summary: 'Telescope custom package – use as template for your own packages',
  version: '0.1.0',
  name: 'telescope-custom-package'
});

Package.onUse(function (api) {

  // ---------------------------------- 1. Core dependency -----------------------------------

  api.use("telescope:core");

  // ---------------------------------- 2. Files to include ----------------------------------

  // i18n config (must come first)

  api.addFiles([
    'package-tap.i18n'
  ], ['client', 'server']);

  // client & server

  api.addFiles([
    'lib/custom_fields.js',
    'lib/callbacks.js',
    'lib/custom_content.js',
  ], ['client', 'server']);

  // client

  api.addFiles([
    'lib/client/templates/custom_menu.html',
    'lib/client/templates/custom_menu_mobile.html',
    'lib/client/templates/programa.html',
    'lib/client/templates/welcome.html',
    'lib/client/stylesheets/custom.scss'
  ], ['client']);

  // server

  api.addFiles([
    'lib/server/templates/custom_emailPostItem.handlebars'
  ], ['server']);

  // i18n languages (must come last)

  api.addFiles([
    'i18n/en.i18n.json'
  ], ['client', 'server']);

});
