### Polly
Polly helps you to answer your customers queries. Use this package to add the default help center to your meteor app. You will need an existing publication in Polly.

#### Contents
1. Installation
2. Basic Usage
3. Customization
4. License

#### Installation
To get Polly into your app, just run the following command from within your project's directory:

```
meteor add kiewietr:polly
```

#### Basic usage
First configure your publication Id somewhere on the client:
```
client/polly.js:

Polly.options.publicationId = 'fiB5dA5C9D6tieKdq';
```

Add the helper link to any page using:
```
{{> pollyHelpLink}}
```

You can also open the Polly help center with any template event using:
```
Template.someTemplate.events({
    'click #someElement' : function () {
        Polly.show()
    }
});
```

#### Customization
The basic options are as follows:
```
Polly.options = {
    	helpcenter: {
    		width: 900, // Helpcenter lightbox width
    		height: 500, // Helpcenter lightbox height
    		closeButtonBackgroundColor: '#fff', // background color of close button
    		closeButtonForegroundColor: '#000' // foreground / text color of close button
    	}
    }
```

Simply overwrite any options like this:
```
client/polly.js:

Polly.options.helpcenter.closeButtonForegroundColor = 'red'
```

Or set the full options when you want to customize all options:
```
client/polly.js:

Polly.options = {
    	helpcenter: {
    		width: 600, // Helpcenter lightbox width
    		height: 750, // Helpcenter lightbox height
    		closeButtonBackgroundColor: 'red', // background color of close button
    		closeButtonForegroundColor: '#fff' // foreground / text color of close button
    	}
    }
```

#### License
The code for this package is licensed under the [MIT License](http://opensource.org/licenses/MIT).