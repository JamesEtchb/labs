
function helloWorld(language){
    if (language == 'en'){
        return 'Hello World'
    } else if (language == 'es'){
        return 'Hola Mundo'
    } else {
        return 'Bonjour le monde'
    }

}

let result = helloWorld('en')
console.log(result)