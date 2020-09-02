'use strict';

const { default: StringBuilder } = require('../../../src/stringBuilder.js');

require('../../../lib/main.js');

describe('StringBuilder Class', () => {
    
    describe('StringBuilder Constructor', () => {
        
        test('it should OuterJsVersion1', () => {
            var data = ["OuterJs", "Version1"];
            expect(new StringBuilder(data).toString()).toBe("OuterJsVersion1");
        });

        test('it should param1param2param3', () => {
            var paramsConcated = new StringBuilder("param1")
                .append("param2")
                .append("param3")
                .toString();
            expect(paramsConcated).toBe("param1param2param3");
        });

        test('it should "12"', () => {
            expect(new StringBuilder(12).toString()).toBe("12");
        });

        test('it should "[Object]"', () => {
            var Lib = {name: "OuterJs", version: "1.0.0"}
            expect(new StringBuilder(Lib).toString()).toBe("[object Object]");
        });

    });

    describe('StringBuilder Append', () => {
        test('it should param1param2param3', () => {
            var paramsConcated = new StringBuilder("param1")
                .append("param2")
                .append("param3")
                .toString();
            expect(paramsConcated).toBe("param1param2param3");
        });

        test('it should ?name=outer&version=1.0&release=rollingstone', () => {
            var data = { name: "outer", version: "1.0", release: "rollingstone" };
            var urlParams = new StringBuilder(`?name=${data.name}`)
                .append(`&version=${data.version}`)
                .append(`&release=${data.release}`)
                .toString();
            expect(urlParams).toBe("?name=outer&version=1.0&release=rollingstone");
        });
    });

    describe('StringBuilder Insert', () => {
        test('it should Outer[obtrusiveValue]Js', () => {
            var result = new StringBuilder("Outer")
                .append("Js")
                .insert(1, "[obtrusiveValue]")
                .toString();
            expect(result).toBe("Outer[obtrusiveValue]Js");
        });

        test('it should [obtrusiveValue]OuterJs', () => {
            var result = new StringBuilder("Outer")
                .append("Js")
                .insert(0, "[obtrusiveValue]")
                .toString();
            expect(result).toBe("[obtrusiveValue]OuterJs");
        });
    });

    describe('StringBuilder Reverse', () => {
        test('it should JsOuter', () => {
            var result = new StringBuilder("Outer")
                .append("Js")
                .reverse()
                .toString();
            expect(result).toBe("JsOuter");
        });
    });

    describe('StringBuilder Clear', () => {
        test('it should empty', () => {
            var result = new StringBuilder("OuterJS")
                .clear()
                .toString();
            expect(result).toBe("");
        });
    });

    describe('StringBuilder Clone', () => {
        test('it should clone string builder', () => {
            var builder1 = new StringBuilder("OuterJS")
                .append(" Version:1.0");
            var builder2 = builder1.clone();
            expect(builder1).not.toBe(builder2);
            expect(builder1.toString()).toBe(builder2.toString());
        });
    });
});