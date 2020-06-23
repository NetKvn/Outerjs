import UriFormat from "./uriFormat";

function handlerParams(uriFormat, params = {}) {
    switch(uriFormat) {
        case UriFormat.GET:
            return handler_Get(params);
        case UriFormat.JSON:
            return handler_Json(params);
        default:
            return "";
    }
}

function handler_Get(params) {
    var pairKeyValue = Object.entries(params);
    if(pairKeyValue.length == 0)
        return "";  

    paramsFormat = pairKeyValue.map((key, value) => `${key}=${value}`).join('&');
    return `?${encodeURI(paramsFormat)}`; 
}

function handler_Json(params) {
    return `?params=${encodeURI(JSON.stringify(params))}`;
}

export default class UriBuilder {
    #hostname;
    #path;
    #port;
    #params = {};
    #secure = "http";

    constructor(hostname = 'localhost', path = "") {
        this.#hostname = hostname;
        this.#path = path;
    }

    setPath(path) {
        this.#path = path;
        return this;
    }

    setPort(port) {
        this.#port = port;
        return this;
    }

    isHttps() {
        this.#secure = "https";
        return this;
    }

    addParam(name, ...value) {
        if(this.#params[name] == undefined) {
            this.#params = new [...value];
        } else {
            this.#params.push(...value);
        }
        return this;
    }

    builder(uriFormat) {
        if(!UriFormat.isDefined(uriFormat)) {
            throw new Error(`type not defined: ${uriFormat}`);
        }
        
        return `${this.#secure}://${this.#hostname}${(this.#port ? ':' + this.#port : "")}/${this.#path}${handlerParams(uriFormat, this.#params)}`;
    }
}