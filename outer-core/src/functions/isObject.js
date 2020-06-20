/**
 * Returns true if value is an Object. Note that JavaScript arrays and functions are objects, 
 * @param {*} obj 
 */
export default function (obj) {
    return (typeof obj === 'object' || typeof obj === 'function' )  && obj !== null;
}