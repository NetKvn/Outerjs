/**
 *  
 */
import applyObjectExtensions from './prototype/objectExtensions';
import applyNumberExtensions from './prototype/numberExtensions';
import applyStringExtensions from './prototype/stringExtensions';

/**
 * 
 */
import AppContext from './appContext';
import DateTime from './dateTime';
import StringBuilder from './stringBuilder';
import StringTokenizer from './stringTokenizer';
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
globalReference.UUID = UUID;
