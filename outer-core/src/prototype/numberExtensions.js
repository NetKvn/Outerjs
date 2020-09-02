import { clamp, inRange, random } from 'lodash';

export default function applyNumberExtensions() {   
    
    /**
     * Clamps number within the inclusive lower and upper bounds.
     * 
     * @param {number} number 
     * @param {number} [lower] 
     * @param {number} upper 
     */
    Number.clamp = function(number, lower, upper) {
        return clamp(number, lower, upper)
    };

    /**
     * Returns true if number is in the range, else false.
     * 
     * @param {number} number 
     * @param {number} param1 
     * @param {number} end 
     */
    Number.inRange = function(number, start, end) {
        return inRange(number, start, end);
    };

    /**
     * Produces a random number between the inclusive lower and upper bounds. If only one argument is provided a number between 0 and the given number is returned. If floating is true, or either lower or upper are floats, a floating-point number is returned instead of an integer.
     * 
     * @param {*} lower 
     * @param {*} upper 
     * @param {*} floating 
     */
    Number.random = function(lower, upper, floating) {
        random(lower, upper, floating);
    };
}