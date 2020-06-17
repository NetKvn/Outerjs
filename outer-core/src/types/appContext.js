class Events {
    constructor() {
        this.listeners = new Map();
    }

    addListener(name, callback) {
        this.listeners.set(name, callback);
    }

    getListener(name) {
        return this.listeners.get(name);
    }
}

class Services {
    constructor() {
        this.Containers = new Map();
    }

    publish(name, api = {}) {
        this.Containers.set(name, api);
    }

    getService(name) {
        return this.Containers.get(name);
    }

    getServices(names = []) {
        var temp_services = {};
        this.Containers.forEach((container, key) => {
            if(names.some( (name) => name === key) )
                temp_services[key] = container;
        })
        return temp_services;
    }

    size() {
        return this.Containers.size;
    }
}

var attributes = {};
var services = new Services();
var events = new Events();

/**
 * This module represents a centralized context, which consists of a set of name to object/events/services bindings.
 * AppContext provides: 
 *      The ability providing configuration information to the application. It is read-write at run time.
 *      The ability to publish events / services.
 *      The ability to resolve services names to registered events.
 *
 * A Context instance is not guaranteed to be synchronized against concurrent access by multiple methods async.
 */
export default {
    setAttr(name, value) {
        attributes[name] = value;
    },
    getAttr(name) {
        return attributes[name];
    },
    on(name, callback) {
        events.addListener(name, callback);
    },
    emit(name, properties = {}, ...nameServices) {
        var callback = events.getListener(name);
        if(callback) {
            if(nameServices.length !== 0)
                callback(services.getServices(nameServices), properties);
            else
                callback(properties);
        }
    },
    Services: services
}