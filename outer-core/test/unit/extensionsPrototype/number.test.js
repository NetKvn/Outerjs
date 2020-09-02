'use strict';

require('../../../lib/main.js');

describe('Number Extensions Functions', () => {    
    describe('test clamp function', () => {        
        test('it should -5', () => {
            expect(Number.clamp(-10, -5, 5)).toBe(-5)
        });

        test('it should 5', () => {
            expect(Number.clamp(10, -5, 5)).toBe(5)
        });

    });

    describe('test inRange function', () => {
        test('it should true', () => {
            expect(Number.inRange(3, 2, 4)).toBeTruthy();
        });

        test('it should true', () => {
            expect(Number.inRange(4, 8)).toBeTruthy();
        });

        test('it should false', () => {
            expect(Number.inRange(4, 2)).toBeFalsy();
        });

        test('it should false', () => {
            expect(Number.inRange(2, 2)).toBeFalsy();
        });

        test('it should true', () => {
            expect(Number.inRange(1.2, 2)).toBeTruthy();
        });

        test('it should false', () => {
            expect(Number.inRange(5.2, 4)).toBeFalsy();
        });

        test('it should true', () => {
            expect(Number.inRange(-3, -2, -6)).toBeTruthy();
        });
    });
});