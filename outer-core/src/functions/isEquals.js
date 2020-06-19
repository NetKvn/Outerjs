/**
 * return true if obj and otherObj is equals
 * @param {*} object 
 * @param {*} other 
 */
export default function(obj, otherObj) {
    return JSON.stringify(obj) === JSON.stringify(otherObj);
}