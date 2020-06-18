require('../lib/outer-core.min.js');


console.log(typeof(AppContext));

var apiAdd = { save: () => {} };
var apiEdit = { edit: () => {} };
var apiDelete = { delete: () => {} };

AppContext.Services.publish("service2", apiAdd);
AppContext.Services.publish("service3", apiEdit);
AppContext.Services.publish("service4", apiDelete);

var apis = AppContext.Services.getServices("service2", "service3", "service4");
console.log(apis.service2 == apiAdd);