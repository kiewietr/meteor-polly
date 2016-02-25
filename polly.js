(function () {
    
(function () {

    Polly = {}
    Polly.options = {
    	helpcenter: {
    		width: 900, // Helpcenter lightbox width
    		height: 500, // Helpcenter lightbox height
    		closeButtonBackgroundColor: '#fff', // background color of close button
    		closeButtonForegroundColor: '#000' // foreground / text color of close button
    	}
    }
    
    Polly.show = function (src) {
        if(src){

    		$('#polly_help_window_wrapper').show();
    
    		// var articleId = $(src).data('articleid');
    
    		// // todo: generate dynamic url for viewing this article
    		// var iframeName = 'polly_help_iframe';
    		// var url = "http://polly-alpha.meteor.com/help/"+viewId+"/topic/abc/article/"+articleId;
    
    		// var $iframe = $('#' + iframeName);
    	 //    if ( $iframe.length ) {
    	 //        $iframe.attr('src',url);  
    
    	 //    }
    
    	}
    
        $('#polly_help_window_wrapper').show();
    }
    
    Polly.hide = function () {
    	$('#polly_help_window_wrapper').hide();
    }

}).call(this)
    
}).call(this)