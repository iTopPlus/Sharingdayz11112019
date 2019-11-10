var is = require('is_js');
function validateEmail(email) 
{
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
function validateEmail2(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
var myEmail = 'thanabodee4301@gmail.com ';
var notEmail = 'thanabodee@dawd';
var notEmail2 = 'thanabodee';
// var test = validateEmail(notEmail);
// var test2 = validateEmail2(notEmail);
// var test3 = validateEmail(myEmail);
// var test4 = validateEmail2(notEmail2);
// console.log('TEST : -->',test);
// console.log('TEST2 : -->',test2);
// console.log('TEST2333 : -->',test3);
// console.log('TEST33333', test4);
// console.log('is email : -->',is.email('test@test.com'));

///////// tel ////////////
// var tel1 = '0811111111';
// var tel2 = '029224585';
// console.log('is tel nummber', is.nanpPhone(tel2));
// console.log('is tel nummber2222222', is.eppPhone(tel2));
// function checkTel(telNumber) {
//     var onlyTelnumber = telNumber.replace(/[^0-9]+/g, '');
//     var check = onlyTelnumber.slice(0, 2);
//     if(check == '02' || check == '03' || check == '04' || check == '05' || check == '07') {
//         if(onlyTelnumber.length != 9) {
//             return null;
//         } else {
//             return 1;
//         }
//     } else {
//         if(onlyTelnumber.length != 10) {
//             return null;
//         } else {
//             return 2;
//         }
//     }
// }

////////// hexColor ////////////
var mycolor1 = 'FF5733';
var mycolor2 = '3333FF';
var mycolor3 = 'D2B4DE';
var mycolor4 = 'FABABB';
var test2= 'BANKKK';
console.log('color1 : -->', is.hexColor(mycolor1));
console.log('color2 : -->', is.hexColor(mycolor2));
console.log('color3 : -->', is.hexColor(mycolor3));
console.log('color4 : -->', is.hexColor(mycolor4));
console.log('color5 L -->', is.hexColor(test2));

///// is.propertyDefined /////
var obj = {};
obj.id = '01';
obj.name = 'testkrub';
var obj2 = {};
obj2.id = '02'
obj2.name = 'test';
obj2.price = 1000;
console.log('obj : -->', is.propertyDefined(obj, 'price'));
console.log('obj2 : -->', is.propertyDefined(obj2, 'price'));

/////// is  ???? //////
console.log('is blackberry : -->', is.blackberry());
console.log('is androidTablet : -->', is.androidTablet());
console.log('is android : -->', is.android());
console.log('is windows : -->', is.windows());
console.log('is desktop : -->', is.desktop());
