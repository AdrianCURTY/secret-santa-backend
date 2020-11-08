const host=window.location.hostname;
const port="3000"

/**
 * 
 * Real functions
 */
function getUserList(callback){
    const httpRequest=createClient();
    httpRequest.open('GET', 'http://'+host+':'+port+'/users', true);
    httpRequest.setRequestHeader('Content-Type', 'application/json');
    httpRequest.onloadend=()=>{callback(JSON.parse(httpRequest.response));};
    httpRequest.send();
}


/**
 * 
 * Mocked functions
 * 
 */

function findAssociatedUser(userName,callback,onError=errorAssociation){
    if(userName === "Loïc"){
        // simulated the fact that Loïc should offer something to Adrian 
        callback("Adrian")
    }else{
        // In other case simulate an error
        onError(userName)
    }

}

/**
 * Utilitary functions
 */
function errorAssociation(name){
    alert("Désolé "+name+" mais il es impossible de découvrir le nom de la personne à qui tu dois offrir un cadeau .\nContacte Adrian ou Loïc");
}
function createClient(){
    if (window.XMLHttpRequest) { // Mozilla, Safari, IE7+...
        return new XMLHttpRequest();
    }
    else if (window.ActiveXObject) { // IE 6 et antérieurs
        return new ActiveXObject("Microsoft.XMLHTTP");
    }
}