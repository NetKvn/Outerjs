/**
 *  
 */
import applyObjectExtensions from './extensionsPrototype/objectExtensions.js';
import applyNumberExtensions from './extensionsPrototype/numberExtensions.js';
import applyStringExtensions from './extensionsPrototype/stringExtensions.js';

/**
 * 
 */
import AppContext from './types/appContext.js';
import DateTime from './types/dateTime.js';
import StringBuilder from './types/stringBuilder.js';
import StringTokenizer from './types/stringTokenizer.js';
import UriBuilder from './types/uriBuilder.js';
import UUID from './types/UUID.js';

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
globalReference.UUID = UUID;
