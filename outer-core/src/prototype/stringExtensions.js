import { camelCase, escape, unescape, repeat } from 'lodash';

export default function applyStringExtensions() {
   
    /**
     * Converts string to camel case.
     * @param {String} str 
     */
    String.toCamelCase = str => {
        return camelCase(str);
    };

    /**
     * Converts string to pascal case.
     * @param {String} str 
     */
    String.toPascalCase = str => {
        return `${str}`
            .replace(new RegExp(/[-_]+/, 'g'), ' ')
            .replace(new RegExp(/[^\w\s]/, 'g'), '')
            .replace(
                new RegExp(/\s+(.)(\w+)/, 'g'),
                ($1, $2, $3) => `${$2.toUpperCase() + $3.toLowerCase()}`
            )
            .replace(new RegExp(/\s/, 'g'), '')
            .replace(new RegExp(/\w/), s => s.toUpperCase());
    };

    /**
     * Check if value is empty
     * @param {String} str 
     */
    String.isEmpty = str => {
        return str === undefined || str === "";
    };

    /**
     * Check if value is null or empty
     * @param {String} str 
     */
    String.isNullOrEmpty = str => {
        return str === null || str === undefined || str === "";
    };

    /**
     * Check if value is null or whiteSpace
     * @param {String} str 
     */
    String.isNullOrWhiteSpace = str => {
        return str === null || str === undefined || /^\s*$/.test(str);
    };

    /**
     * Check if value is Lower Case
     * @param {*} str 
     */
    String.isLowerCase = str => {
        return str != undefined && str !== "" && str === str?.toLowerCase();
    };

    /**
     * Check if value is Upper Case
     * @param {String} str 
     */
    String.isUpperCase = str => {
        return str != undefined && str !== "" && str === str?.toUpperCase(); 
    };

    /**
     * Converts the characters "&", "<", ">", '"', and "'" in string to their corresponding HTML entities.
     * @param {String} str 
     */
    String.escape = str => {
        return escape(str);
    };

    /**
     * The inverse of function espace; this method converts the HTML entities &amp;, &lt;, &gt;, &quot;, and &#39; in string to their corresponding characters.
     * @param {*} str 
     */
    String.unescape = str => {
        return unescape(str);
    };

    /**
     * Repeats the given string n times.
     * @param {String} str 
     * @param {Integer} number 
     */
    String.repeat = (str, number = 1) => {
        return repeat(str, number);
    };

}