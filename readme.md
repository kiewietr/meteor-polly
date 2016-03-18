### Polly
Polly helps you to answer your customers queries. Use this package to add the default help center to your meteor app. You will need an existing publication in Polly.

#### Contents
1. Installation
2. Basic Usage
3. License

#### Installation
Make sure you have an account at [Polly](https://app.polly.help/) and have created a publication.

To get Polly into your app, just run the following command from within your project's directory:

```
meteor add kiewietr:polly
```

#### Basic usage
First configure your publication Id in your meteor settings file:
```
settings.json:

{
    "public" : {
        "polly" : {
            "publication" : "fiB5dA5C9D6tieKdq"
        }
    }
}
```

Add the basic helper link to any page using:
```
{{> pollyHelpLink}}
```

You can also open the Polly help center with any template element using class showPollyHelp:
```
<a href="#" class="showPollyHelp">Help</a>
```

#### License
The code for this package is licensed under the [MIT License](http://opensource.org/licenses/MIT).
