Package.describe({
  name: "kiewietr:polly",
  summary: "Wrapper package to add Polly Help Center to your meteor app.",
  version: "1.0.8",
  git: "https://github.com/kiewietr/meteor-polly",
  documentation: "readme.md"
});

Package.on_use(function(api){
    api.versionsFrom( '1.2.0.2' );
    
    api.use(["templating", "jquery", "less"], "client");

    api.add_files([
        "templates/polly.html",
        "polly.js"
        ], "client");
        
    // api.export('Polly');
});