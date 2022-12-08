// JSon objects to Strings
console.log(JSON.stringify({x:55,y:88}))
console.log(JSON.stringify(new Date(2006,0,2)))
console.log(JSON.stringify([new Number(66),new String('flase')]))

// JSon Strings to object

const json = '{"result":true, "count":42 ,"Prefix" : ["Md","Muhammad","Muhammed"]}';
const obj = JSON.parse(json);

console.log(obj.count);
console.log(obj.Prefix)

console.log(obj.result);