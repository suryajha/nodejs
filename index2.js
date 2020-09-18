// String

// Number
// Boolean
// Undefined
// Null
// RegExp

//object

var obj1={
    name:'ram',
    city:'delhi'
}

console.info(obj1.name + " "+ obj1.city);
console.log(obj1.name + " "+ obj1.city);


//function
function display(name) {
    console.log('Function : '+name);
}
display('Ram')

console.log(process.execPath);
console.log(process.pid);


// {}
// []
// new Object();

//Modules
//server express

import {addnumber} from './indexmodules.js';

console.log('module call by function'+addnumber(7));


//"type": "module",

//MEAN - Mongodb, expess,Angular, Node.js