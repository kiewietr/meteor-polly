Package.describe({
  name: "kiewietr:polly",
  summary: "Package to add Polly Help Center to your meteor app. Add simple link with {{> pollyHelpLink}}",
  version: "1.0.2",
  git: "https://github.com/kiewietr/meteor-polly",
  documentation: "readme.md"
});

Package.on_use(function(api){
    api.versionsFrom( '1.2.0.2' );
    
    api.use(["templating", "jquery", "less"], "client");

    api.add_files([
        "templates/body.html",
        "templates/iframe.html",
        "templates/polly.html",
        "templates/iframe.js",
        "templates/polly.js",
        "polly.js",
        "styling/polly.less"
        ], "client");
        
    api.export('Polly');
});