Template.pollyIframe.helpers({
    polly : function() {
        if(!Polly.options.publicationId)
            throw Meteor.Error('polly-configuration','Please set your publication Id on client with Polly.options.publicationId = 123')
            
       return Polly;
    }
})

Template.pollyIframe.events({
    'click .polly_close' () {
        Polly.hide()
    }
})