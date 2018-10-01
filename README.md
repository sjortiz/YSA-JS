# YSA - You shall ask -- API Vanilla JS CLIENT

## What is YSA?

A Restful API that runs a feature flagging status storage as a service.
[YSA-REPO](https://github.com/sjortiz/YSA)

## What is this client for?

It makes automatic all the interaction between your code and the api on execution time,
allowing you to relax yourself knowing that you don't need to code such interaction.

Here is an example!

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>test</title>
    <script src="./index.js"></script>
</head>
<body>
    <script>
        var api = API(`API_URL_WITH_SLASH`, `app_name`, `features_group`)

        api.enable(`feature_name`).then(function (data) {
        	// data is true or false, so choose what to do with that info ;)

        }).catch(function(error){
            // that feature doesn't exist : o
        })

    </script>
</body>
</html>
```
