document.addEventListener('DOMContentLoaded', function() {
    // add polly js
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "https://public.polly.help/pollyjs/" + Meteor.settings.public.polly.publication;
    document.head.appendChild(s);
    
    // add polly css
    var s = document.createElement("link");
    s.rel = "stylesheet";
    s.href = "https://public.polly.help/pollycss/" + Meteor.settings.public.polly.publication;
    document.head.appendChild(s);
})


