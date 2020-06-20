'use strict';

require('../../../lib/outer-core.min.js');

describe('Functions Globals', () => {

    describe('isEmptyObject function', () => {
        test('{} it should return true', () => {
            expect(isEmptyObject({})).toBeTruthy();
        });

        test('{a:1} it should return false', () => {
            expect(isEmptyObject({ a: 1 })).toBeFalsy();
        });

        test('{ getName() {} } it should return false', () => {
            expect(isEmptyObject({ getName() {} })).toBeFalsy();
        });

        test('null it should return false', () => {
            expect(isEmptyObject(null)).toBeTruthy();
        });

        test('undefined it should return false', () => {
            expect(isEmptyObject(undefined)).toBeTruthy();
        });
    });

    describe('isEquals function', () => {
        test('it should return true, {} == {}', () => {
            var obj = {};
            var otherObj = {};
            expect(isEquals(obj, otherObj)).toBeTruthy();
        });

        test('it should return true, {a:1, b:2} == {a:1, b:2}', () => {
            var obj = {a:1, b:2};
            var otherObj = {a:1, b:2};
            expect(isEquals(obj, otherObj)).toBeTruthy();
        });

        test('it should return false, {a:{}, b: { c: \'a\' }} == {}', () => {
            var obj = { a: {}, b: {c:'a'}};
            var otherObj = {};
            expect(isEquals(obj, otherObj)).toBeFalsy();
        });

        test('it should return false, {} == null', () => {
            var obj = {};
            var otherObj = null;
            expect(isEquals(obj, otherObj)).toBeFalsy();
        });

        test('it should return false, {} == undefined', () => {
            var obj = {};
            var otherObj = undefined;
            expect(isEquals(obj, otherObj)).toBeFalsy();
        });

        test('it should return true, [1, 2, 3, 5] == [1, 2, 3, 5]', () => {
            var obj = [1, 2, 3, 5];
            var otherObj = [1, 2, 3, 5];
            expect(isEquals(obj, otherObj)).toBeTruthy();
        });
    });

    describe('isFunction function', () => {
        test('it should return true, function', () => {
            var anyFunction = () => {};
            expect(isFunction(anyFunction)).toBeTruthy();
        });

        test('it should return false, object', () => {
            var obj = {};
            expect(isFunction(obj)).toBeFalsy();
        });

        test('it should return false, array', () => {
            var anyArray = [1, 2, 3, 5];
            expect(isFunction(anyArray)).toBeFalsy();
        });

        test('it should return false, instance function', () => {
            function Author() {
                this.name = 'Alan Marquez E.';
            }
            let author = new Author();
            expect(isFunction(author)).toBeFalsy();
        });

        test('it should return false, null', () => {
            expect(isFunction(null)).toBeFalsy();
        });

        test('it should return false, undefined', () => {
            expect(isFunction(undefined)).toBeFalsy();
        });
    });

    describe('isMatch function', () => {
        
    });

    describe('isNull function', () => {
        test('it should return true', () => {
            var anyFunction = () => {};
            expect(isFunction(anyFunction)).toBeTruthy();
        });

        test('it should return false', () => {
            var anyFunction = () => {};
            expect(isFunction(anyFunction)).toBeTruthy();
        });
    });

    describe('isNullOrUndefined function', () => {
        
    });

    describe('isNumber function', () => {
        
    });

    describe('isObject function', () => {
        test('it should return true, array', () => {
            var anyArray = [1, 2, 3];
            expect(isObject(anyArray)).toBeTruthy();
        });

        test('it should return true, object', () => {
            var anyObj = {};
            expect(isObject(anyObj)).toBeTruthy();
        });

        test('it should return true, function', () => {
            var anyfunc = function() {};
            expect(isObject(anyfunc)).toBeTruthy();
        });

        test('it should return false, null', () => {
            var anyObj = null;
            expect(isObject(anyObj)).toBeFalsy();
        });

        test('it should return false, undefined', () => {
            var anyObj;
            expect(isObject(anyObj)).toBeFalsy();
        });
    });

    describe('isUndefined function', () => {
        test('it should return true', () => {
            var anyObj;
            expect(isUndefined(anyObj)).toBeTruthy();
        });

        test('it should return false', () => {
            var anyObj = () => {};
            expect(isUndefined(anyObj)).toBeFalsy();
        });

        test('it should return false', () => {
            var anyObj = null;
            expect(isUndefined(anyObj)).toBeFalsy();
        });
    });
});