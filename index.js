var API = function(api_url, refreh_token, group){

    if (arguments.length != 3) throw new Error('Just three params are allowed')

    function request(method, endpoint){

        return fetch(api_url + endpoint, {
            method: method
        }).then(function (response){

            if (response.status !== 200 && response.status !== 201){
                return Promise.reject(response)
            }

            return response.json()
        })
    }

    function enable(feature){

        var endpoint = 'features/' + group + '/' + feature + '/sj'

        return request('GET', endpoint).then(function (response){
            return response.data[0].status
        }).catch(function(response){
            return Promise.reject(response)
        })
    }

    return {
        enable: enable
    }

}
