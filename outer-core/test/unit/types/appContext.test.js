'use strict';

require('../../../lib/outer-core.min.js');

describe("AppContext Functions", () => {

    test("it should be a global module", () => {
        expect(typeof(AppContext)).toBe("object");
    });

    describe("it should save services", () => {
        test("it should return one services", () => {
            var apiAdd = { save: () => {} };
            AppContext.Services.publish("service1", apiAdd);
            var api = AppContext.Services.getService("service1");
            expect(api).toBe(apiAdd);  
        });

        test("it should return multiple services", () => {
            var apiAdd = { save: () => {} };
            var apiEdit = { edit: () => {} };
            var apiDelete = { delete: () => {} };

            AppContext.Services.publish("service2", apiAdd);
            AppContext.Services.publish("service3", apiEdit);
            AppContext.Services.publish("service4", apiDelete);

            var apis = AppContext.Services.getServices("service2", "service3", "service4");
            expect(apis.service2).toEqual(apiAdd);
            expect(apis.service3).toEqual(apiEdit);
            expect(apis.service4).toEqual(apiDelete);  
        });

        test("it should return undefined", () => {
            AppContext.Services.publish("", {});
        });

        test("it should return object empty", () => {
            AppContext.Services.publish("", {});
        });
    });
      
    describe("it should save attributes", () => {
        test("it should return value1", () => {
            AppContext.setAttr("prop1", "value1");
            expect(AppContext.getAttr("prop1")).toBe("value1");         
        });
        
        test("it should return 10", () => {
            AppContext.setAttr("prop2", 10);
            expect(AppContext.getAttr("prop2")).toBe(10);           
        }); 
        
        test("it should return object", () => {
            AppContext.setAttr("prop3", { name: "Acme Company", created: "1996" });
            expect(AppContext.getAttr("prop3")).toEqual({ name: "Acme Company", created: "1996" });          
        });  

        test("it should return undefined", () => {
            expect(AppContext.getAttr("prop4")).toBe(undefined);       
        }); 
    });

    describe("it should save events", () => {
        test("it should trigger event", () => {
            var callback = () => expect(1).toBeTruthy();
            AppContext.on("createActivity", callback);
            AppContext.emit("createActivity");
        });

        test("it should trigger event with params", () => {
            var prop = { name: "ACME"};
            var callback = (params) => expect(params).toBe(prop);
            AppContext.on("createCompany", callback);
            AppContext.emit("createCompany", prop);
        });
    
        test("it should trigger event with params and service", () => {
            var person = { name: "Joe Doe"};
            var api = { create: () => {} };
            AppContext.Services.publish("service5", api);
            var callback = (service, properties) =>  {
                expect(service.service5).toEqual(api);
                expect(properties).toEqual(person);
            };
            AppContext.on("createPerson", callback);
            AppContext.emit("createPerson", person, "service5");
        });

        test("it should trigger event with params and services", () => {
            var person = { name: "Joe Doe"};
            var api1 = { create: () => {} };
            var api2 = { create: () => {} };
            AppContext.Services.publish("service6", api1);
            AppContext.Services.publish("service7", api2);
            var callback = (service, properties) =>  {
                expect(service.service6).toEqual(api1);
                expect(service.service7).toEqual(api2);
                expect(properties).toEqual(person);
            };
            AppContext.on("createEmployee", callback);
            AppContext.emit("createEmployee", person, "service6", "service7");
        });
    });
});