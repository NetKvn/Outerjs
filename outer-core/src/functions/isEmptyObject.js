/**
 * Returns true if object is empty 
 * @param {object} obj 
 */
export default function(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}