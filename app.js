// 1
// function sum (x,y) {
// return x+y
// }

// let a = sum( 2,6)
// console.log(a)
// 2
// function toSekunds(minutes,soniya) {
//     return minutes*soniya
// }
// let result = toSekunds(456,12345)
// console.log(result)
// 3
// function nextInteger(int,son) {
//     return  int + son
// }
// let result = nextInteger(23,1)
// console.log(result)
// 4
// function uchburchakYuzi(asos, balandlik) {
//     return (asos*balandlik) /2
// }
// let result = uchburchakYuzi(3,2)
// console.log(result)
// 5
// function ageToDays(age,kun) {
//     return age*kun
// }
// let result = ageToDays(24,365)
// console.log(result)
// 6
// function kub (kub,son) {
// return kub**3
// }
// let result = kub(5,3)
// console.log(result)
// 7

// function firstElement ([1, 2, 3]) {
//     return 
// }

// 8
// function power(x,y) {
//     return x*y
// }
// let result = power(5,3)
// console.log(result)
// 9
// function hourToSekunds(hour,sekund) {
//     return hour* sekund
// }
// let result = hourToSekunds(5,60)
// console.log(result)
// 10
// function uchinchiTomon(tomon1, tomon2) {
//     return (tomon1+tomon2)-1
// }
// let result = uchinchiTomon(8,10)
// console.log(result)
// 11
// function qoldiq(son1, son2) {
//     return son1%son2
// }
// let result = qoldiq(1,3)
// console.log(result)
// 12
// function turtburchakYuzi(boyi, eni) {
//     return boyi * eni
// }
// let result = turtburchakYuzi(,3)
// console.log(result)
// 13
// function stringQoshish(a) {
//     return `something ${a}`
// }
// let result = stringQoshish('Bob Jane')
// console.log(result)
// 14
// function noldan(raqam) {
//  if (raqam>=0 ){
//     console.log(true)
//  } else {
// console.log(false)
//  }

// 16
// function ichkiBurchaklar(n) {
//     return (n - 2) * 180
// }
// let result = ichkiBurchaklar(3)
// console.log(result)
// 17
// function ochkolar(x,y) {
//     return x+y 
// }
// let result = ochkolar(2,5)
// console.log(result)
// 18
// function sum (son) {
// return `Mubashir${son}`
// }
// let result = sum('Edabit')
// console.log(result)
// 19
// function ikkitaSon(x,y) {
//     son = `${x+y}`
//     if(son<100){
//         console.log(true)
//     } else{
//         console.log(false)
//     }
// }
// ikkitaSon(56,5)
// 20

// function printArray () {
//     for (let i = 1; i<=6; i++){
//         console.log(i)
//     }
// }
// printArray()
// 21
// function oyoqlar(tovuq, qoy, sigir) {
//    return (2*2)+(3*4)+(5*4) 
// }
// let result= oyoqlar(2, 3, 5)
// console.log(result)

// 22

// function tengMi(x, y) {
//     if (x === y){
//         console.log(true)
//     } else {
//         console.log(false)   
//     }
// }
// tengMi(4, 8)
// 23
// function futbolOchko(yutishlar, duranglar, maglubiyatlar) {
//     return `${( yutishlar*3)+(duranglar*1)+(maglubiyatlar*0)}`
// }
// let fut = futbolOchko(3,4,2)
// console.log(fut)
// 25
// function sekundlar(soat, minut) {
//     let son = soat*3600
//     let min = minut*60
//     return son+min
// }
// let soatMunut = sekundlar(1,3)
// console.log(soatMunut)
// 26
// function juft (son) {
//     if(son%2===0){
//         console.log(true)
//     } else {
//         console.log(false)
//     }
        
// }
// juft (4)
// 27

// function tengMi(x, y) {
//     if(x===y){
//         console.log(true)
//     } else {
//         console.log(false) 
//     }
// }
// tengMi(1,1)
// 28
// function booleanToString(bool) {
//     return '' + bool;
// }
// let s = booleanToString(true)
// console.log(s)
// 29
// let async = (params) => {
//     return params
// }
// let s= async (3)
// console.log(s)
// 30
// function frameSoni(minut, frame) {
//     return minut*60
// }
// let result = frameSoni(10,1)
// console.log(result)

// function teng10(str,ki) {
//    if(str+ki>= 10|| str >=10 || ki>=10) {
//     console.log(true)
//    } else {
// console.log(false)
//    }
// }
// teng10(6,4)

// function litrMasofa(km) {
//     return km*10
// }
// let s = litrMasofa(15)
// console.log(s)

// function son (a,b) {
//     if(a>b){
//         return a;
//     } else {
//      return b
//     }
// }
// let s = son(5,8)
// console.log(s)



// function arr(x, y) {
//     return [x, y];
//   }
//   let s = arr(5,8)
// console.log(s)

// function tengStrings(str1, str2) {
// if ( str1.length === str2.length){
//     console.log(true)
// }else{
//     console.log(false) 
// }
// }
// let s = tengStrings("AB", "CD")

// function boshStr(str) {
//     return str===''
// }
//   let s = boshStr('f')
// console.log(s)
    
// function bolinsin5(son) {
//  return son%5===0
// }
//   let s = bolinsin5(50)
// console.log(s)

// function bolinsin100(son) {
//     return son%100===0  
// }
//   let s = bolinsin100(100)
// console.log(s)

function uzunlik(str) {
    
    if (str === "") {
      return 0;  
    } else {
      return 1 + uzunlik(str.slice(1));  
    }
  }
  
 
  console.log(uzunlik("apple"));




