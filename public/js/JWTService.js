import { sign, verify } from 'jsonwebtoken';

function JWTService (secretKey) {

    var secretKey = secretKey;
    var methods = {};

    function isObjectNullOrUndefined(object){
        return (object === undefined || object === null);
    }

    function isStringNullOrEmpty(str){
        return (str === undefined || str === null || str === "");
    }

    methods.generateToken = function(configuration){
        if(isObjectNullOrUndefined(configuration)){
            throw new Error("Arguments not valid!");
        }
        return sign(configuration.data, secretKey, configuration.expireDate);
    }

    methods.isTokenValid = function(token) {
        if(isStringNullOrEmpty(token)){
            return new Error("Given token is not valid!");
        }
        try{
            verify(token, secretKey);
            return true;
        } catch(err){
            return false;
        }
    }

    methods.getTokenData = function(token){
        if(isStringNullOrEmpty(token)){
            return new Error("Given token is not valid!");
        }
        try{
            const decodedBody = verify(token, secretKey);
            return decodedBody;
        } catch (err){
            throw err;
        }
    }

    return methods;
}

export default {
    JWTService
}