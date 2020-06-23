/**
 *  
 */
import applyObjectExtensions from './extensionsPrototype/objectExtensions';
import applyNumberExtensions from './extensionsPrototype/numberExtensions';
import applyStringExtensions from './extensionsPrototype/stringExtensions';

/**
 * 
 */
import isEmptyObject from './functions/isEmptyObject';
import isEquals from './functions/isEquals';
import isFunction from './functions/isFunction';
import isMatch from './functions/isMatch';
import isNull from './functions/isNull';
import isNullOrUndefined from './functions/isNullOrUndefined';
import isNumber from './functions/isNumber';
import isObject from './functions/isObject';
import isUndefined from './functions/isUndefined';

/**
 * 
 */
import AppContext from './appContext';
import DateTime from './dateTime';
import StringBuilder from './stringBuilder';
import StringTokenizer from './stringTokenizer';
import UriFormat from './types/uriFormat';
import UriBuilder from './uriBuilder';
import UUID from './UUID';

/**
 * 
 */
applyObjectExtensions();
applyNumberExtensions();
applyStringExtensions();

/**
 * 
 */
var globalReference = typeof(window) !== 'undefined' ? window : global;
globalReference.AppContext = AppContext;
globalReference.DateTime = DateTime;
globalReference.StringBuilder = StringBuilder;
globalReference.StringTokenizer = StringTokenizer;
globalReference.UriBuilder = UriBuilder;
globalReference.UriFormat = UriFormat;
globalReference.UUID = UUID;

/**
 * 
 */
globalReference.isEmptyObject = isEmptyObject;
globalReference.isEquals = isEquals;
globalReference.isFunction = isFunction;
globalReference.isMatch = isMatch;
globalReference.isNull = isNull;
globalReference.isNullOrUndefined = isNullOrUndefined;
globalReference.isNumber = isNumber;
globalReference.isObject = isObject;
globalReference.isUndefined = isUndefined;