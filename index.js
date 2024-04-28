//7-savol
// function chiqaribBer(obj) {
//   for (var prop in obj) {
//     if (obj.hasOwnProperty(prop)) {
//       console.log(prop + ': ' + obj[prop]);
//     }
//   }
// }

// var obyekt = {
//   nom: 'Saydullo',
//   yosh: 17,
//   manzil: 'oltiarq',
//   telefon: '88 627 60 66'
// };

// chiqaribBer(obyekt);





//8-savol
// var obyekt = {
//   nom: 'Saydullo',
//   class: 10,
//   yosh: 17,
//   manzil: 'oltiarq',
//   telefon: '88 627 60 66'
// };

// delete obyekt.manzil;
// delete obyekt.telefon;

// console.log(obyekt);






// 11-savol
// var Mashina = {
//   halat: 'tugallandi',
//   start: function () {
//     if (this.halat === 'tugallandi') {
//       console.log('vrum vrum');
//       this.halat = 'ishlayapti'; 
//     } else {
//       console.log('driving');
//     }
//   },
//   drive: function () {
//     if (this.halat === 'ishlayapti') {
//       console.log('driving');
//     } else {
//       console.log('Mashina ishga tushirilmagan,');
//     }
//   },
//   stop: function () {
//     if (this.halat === 'ishlayapti') {
//       console.log('stopping');
//       this.halat = 'tugallandi';
//     } else {
//       console.log('Mashina allaqachon to\'xtatilgan.');
//     }
//   }
// };

// Mashina.start();

// Mashina.drive();

// Mashina.stop();





//9-savol
// function xususiyatlarSoni(obyekt) {
//   var son = 0;
//   for (var prop in obyekt) {
//     if (obyekt.hasOwnProperty(prop)) {
//       son++;
//     }
//   }
//   return son;
// }

// var obyekt = {
//   nom: 'John',
//   yosh: 30,
//   manzil: 'Toshkent',
//   telefon: '123-456-7890'
// };

// console.log('Obyektning ichidagi xususiyatlar soni: ' + xususiyatlarSoni(obyekt));






//10-savol
// function Shaxs(ism, daromat, xarajat) {
//   this.ism = ism;
//   this.daromat = daromat;
//   this.xarajat = xarajat;

//   this.getMonthlyIncome = function () {
//     return this.daromat - this.xarajat;
//   };
// }

// var odamlar = [];

// odamlar.push(new Shaxs('Saydullo', 50000, 22000));
// odamlar.push(new Shaxs('Temurbek', 38000, 25500));
// odamlar.push(new Shaxs('Muhammadrasul' 42000, 30000));

// odamlar.forEach(function (shaxs) {
//   console.log(shaxs.ism + 'ning oylik daromati: $' + shaxs.getMonthlyIncome());
// });





/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////11___DARS


