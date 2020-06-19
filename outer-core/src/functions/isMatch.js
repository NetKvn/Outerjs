/**
 * Returns true if the keys and values in properties are contained in object. 
 * @param {*} object 
 * @param {*} properties 
 */
export default function(object, properties) {
    var keys = Object.keys(properties);
    if (keys.length == 0) return false;
    for (i=0; i<keys.length; i++) {
        if(JSON.stringify(properties[keys[i]]) === JSON.stringify(object[keys[i]]))
            return false;
    }
    return true;
}