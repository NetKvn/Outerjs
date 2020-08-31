'use strict';

require('../../../lib/main.js');

describe("String Extensions Functions", () => {

    describe("test function toCamelCase", () => {
        test("it should outerJs", () => {
            var str = "Outer JS"
            return expect(String.toCamelCase(str)).toBe("outerJs");
        });

        test("it should outerJs", () => {
            var str = "Outer-JS"
            return expect(String.toCamelCase(str)).toBe("outerJs");
        });

        test("it should outerJs", () => {
            var str = "-Outer-JS-"
            return expect(String.toCamelCase(str)).toBe("outerJs");
        });

        test("it should outerJs", () => {
            var str = "__Outer__JS_"
            return expect(String.toCamelCase(str)).toBe("outerJs");
        });

        test("it should outerJs", () => {
            var str = "OUTER JS"
            return expect(String.toCamelCase(str)).toBe("outerJs");
        });
    });
    
    describe("test function toPascalCase", () => {
        test("it should OuterJS", () => {
            var str = "outer_js";
            expect(String.toPascalCase(str)).toBe("OuterJs");
        });

        test("it should BreakMyHeart", () => {
            var str = "break_my-Heart";
            expect(String.toPascalCase(str)).toBe("BreakMyHeart");
        });

        test("it should TottoAfrica", () => {
            var str = "---_totto africa__--";
            expect(String.toPascalCase(str)).toBe("TottoAfrica");
        });

        test("it should MyEgoIsBig", () => {
            var str = "My EgO iS biG";
            expect(String.toPascalCase(str)).toBe("MyEgoIsBig");
        });
    });

    describe("test function isEmpty", () => {
        test("it should true", () => {
            var str = "";
            return expect(String.isEmpty(str)).toBeTruthy();
        });

        test("it should false", () => {
            var str = null;
            return expect(String.isEmpty(str)).toBeFalsy();
        });

        test("it should true", () => {
            var str = undefined;
            return expect(String.isEmpty(str)).toBeTruthy();
        });

        test("it should false", () => {
            var str = "0";
            return expect(String.isEmpty(str)).toBeFalsy();
        });

        test("it should false", () => {
            var str = "OuterJs";
            return expect(String.isEmpty(str)).toBeFalsy();
        });
    });

    describe("test function isNullOrEmpty", () => {
        test("it should true", () => {
            var str = "";
            return expect(String.isNullOrEmpty(str)).toBeTruthy();
        });

        test("it should true", () => {
            var str = null;
            return expect(String.isNullOrEmpty(str)).toBeTruthy();
        });

        test("it should true", () => {
            var str = undefined;
            return expect(String.isNullOrEmpty(str)).toBeTruthy();
        });

        test("it should false", () => {
            var str = "Outerjs";
            return expect(String.isNullOrEmpty(str)).toBeFalsy();
        });

        test("it should false", () => {
            var str = "0";
            return expect(String.isNullOrEmpty(str)).toBeFalsy();
        });
    });

    describe("test function isNullOrWhiteSpace", () => {
        test("it should true", () => {
            var str = "  ";
            expect(String.isNullOrWhiteSpace(str)).toBeTruthy();    
        });

        test("it should true", () => {
            var str = " ";
            expect(String.isNullOrWhiteSpace(str)).toBeTruthy();    
        });

        test("it should true", () => {
            var str = null;
            expect(String.isNullOrWhiteSpace(str)).toBeTruthy();  
        });

        test("it should true", () => {
            var str = undefined;
            expect(String.isNullOrWhiteSpace(str)).toBeTruthy();  
        });

        test("it should false", () => {
            var str = "  A";
            expect(String.isNullOrWhiteSpace(str)).toBeFalsy(); 
        });

        test("it should false", () => {
            var str = "OuterJs";
            expect(String.isNullOrWhiteSpace(str)).toBeFalsy(); 
        });
    });

    describe("test function isLowerCase", () => {
        test("it should true", () => {
            var str = "outerjs";
            expect(String.isLowerCase(str)).toBeTruthy(); 
        });

        test("it should false", () => {
            var str = "Outerjs";
            expect(String.isLowerCase(str)).toBeFalsy(); 
        });

        test("it should false", () => {
            var str = "OUTERJS";
            expect(String.isLowerCase(str)).toBeFalsy(); 
        });

        test("it should false", () => {
            expect(String.isLowerCase(null)).toBeFalsy(); 
        });

        test("it should false", () => {
            expect(String.isLowerCase(undefined)).toBeFalsy(); 
        });

        test("it should false", () => {
            expect(String.isLowerCase("")).toBeFalsy(); 
        });
    });

    describe("test function isUpperCase", () => {
        test("it should true", () => {
            var str = "OUTERJS";
            expect(String.isUpperCase(str)).toBeTruthy(); 
        });

        test("it should false", () => {
            var str = "Outerjs";
            expect(String.isUpperCase(str)).toBeFalsy(); 
        });

        test("it should false", () => {
            var str = "outerjs";
            expect(String.isUpperCase(str)).toBeFalsy(); 
        });

        test("it should false", () => {
            expect(String.isUpperCase(null)).toBeFalsy(); 
        });

        test("it should false", () => {
            expect(String.isUpperCase(undefined)).toBeFalsy(); 
        });

        test("it should false", () => {
            expect(String.isUpperCase("")).toBeFalsy(); 
        });
    });

    describe("test function repeat", () => {
        test("it should OuterJsOuterJsOuterJsOuterJs", () => {
            expect(String.repeat("OuterJs", 4)).toBe("OuterJsOuterJsOuterJsOuterJs"); 
        });

        test("it should AAA", () => {
            expect(String.repeat("A", 3)).toBe("AAA"); 
        });

        test("it should foo", () => {
            expect(String.repeat("foo")).toBe("foo"); 
        });
    });
});