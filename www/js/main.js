//document.write("Lorem ipsum dolor.");
//console.log("Lorem ipsum dolor.");
//console.info("Lorem ipsum dolor.");
// console.error("Lorem ipsum dolor.");
//console.warn("Lorem ipsum dolor.");

//var num;
//num = 5;
// var num = 5;
// num = 7;
// console.log("Var: " + num);
//
// var number;
// number = true;
// numder = "stroka";
//
// var num1 = 5.4;
// var num2 = 15;
//
// console.log("Res: " + (num1 % num2));
//
// var num3 = 5;
// num3 %=  7;
// console.log(num3);
//
// var str1 = Number("12");
// var str2 = 2;
// console.log(str1+str2);
//
// console.log("Math: " + Math.PI);
// console.log("Math: " + Math.min(2,-8,6));


// var number = 15;
// var isHasHouse = true;
//
// if(number < 5 && !isHasHouse) {
//   console.log("ok");
// } else if(number == 5) {
//   console.log("elif");
// } else {
//   console.log("error");
// }
//
// var stroka = "word";
//
// switch(stroka) {
//   case "4":
//     console.log("4");
//     break;
//   default:
//     console.log("def");
//     break;
// }


//var arr = [-5, true, "stroka"];
// console.log(arr.length);
//
// var matrix = [
//   [4,78,"rt"], [2, 6], [8, -3]
// ];
// matrix[1][0] = 90;
// console.log(matrix);


// for(var i = 100; i > 10; i /=2) {
//   console.log(i);
// }
// var j = 0;
// while(j < 10) {
//   console.log(j);
//   j++;
// }
//
// var isHasCar = true;
// while(isHasCar) {
//
// }
//
// var x = 100;
// do {
//   console.log(x);
// } while(x < 50);
//
// for(var i = 10; i <= 20; i+=2) {
//   if(i > 15)
//     break;
//
//   console.log(i);
// }
// for(var i = 10; i <= 20; i++) {
//   if(i % 2 == 0)
//     continue;
//
//   console.log(i);
// }
// for(var i = 0; i < arr.length; i++) {
//   console.log("el " + i + ": " + arr[i]);
// }



//alert("Warn");
// var data = confirm("qwerty");
// console.log(data);
//
// var data = prompt("qwerty");
// console.log(data);
// var person = null;
// if(confirm("qwerty")) {
//   person = prompt("input your name")
//   alert("Hi, " + person)
// } else {
//   alert("dismiss")
// }


// function info(word) {
//   console.log("info");
//   console.log(word);
// }
//
// function summ(a, b) {
//   var res = a + b;
//   console.log(res);
//   info("ewe");
// }
//
// function summa(arr) {
//   var sum = 0;
//   for(var i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   console.log(sum);
//   return sum;
// }
// var arr = [5,6,7,7,7];
// var res = summa(arr);
// res /=3;
// console.log(res);
//
//var num = 10;
// function info() {
//   var num = 10;
//   console.log(num);
// }
// console.log(num);
// info();
//
// var counter=0;
// function onClickButton(element) {
//   counter++;
//   element.innerHTML = "awfaf" + counter;
//   //element.style.background = "red";
//   //element.style.color = "blue";
//   element.style.cssText = "border-radius: 5px; border 0; font size: 20px";
// }
//
// function onInput(el) {
//   if(el.value == "Hello") {
//     alert("И тебе hello");
//   }
//   console.log(el.value);
// }


// var text = document.getElementById('text');
// text.title="New text";
// console.log(text.title);
//
// text.style.color = "red";
// text.style.backgroundColor = "blue";
// text.innerHTML = "New<br>string"
//
// //document.getElementById('text').style.color = "green";
//
//var spans = document.getElementsByTagName('span');
// var spans =document.getElementsByClassName('simple-text');
// for(var i = 0; i < spans.length; i++) {
//   console.log(spans[i].innerHTML);
// }
//
// document.getElementById('main-form').addEventListener("submit", checkForm);
//
// function checkForm(event) {
//   event.preventDefault();
//   var el = document.getElementById('main-form');
//
//   var name = el.name.value;
//   var pass = el.pass.value;
//   var repass = el.repass.value;
//   var state = el.state.value;
//
//   var fail = "";
//   if(name == "" || pass == "" || state == "") {
//     fail = "Заполните все поля!";
//   } else if(name.length < 2 || name.length > 50) {
//     fail = "Введите корректное имя!";
//   } else if(repass != pass) {
//     fail = "Пароли должны совпадать!";
//   } else if(pass.split("&").length > 1) {
//     fail = "Некорректный пароль!";
//   }
//   if (fail != "") {
//     document.getElementById('error').innerHTML = fail;
//   } else {
//     //alert("Все поля корректно заполнены!");
//     window.location = 'https://google.com';
//   }
// }



// var id = setInterval(myFunc, 1000);
//
// var counter = 0;
// function myFunc() {
//   counter++;
//   console.log("Counter: " + counter);
//   if(counter == 3) {
//     clearInterval(id);
//   }
// }

// setInterval(function() {
//     counter++;
//     console.log("Counter: " + counter);
// }, 1500);
//
// setTimeout(function() {
//   console.log("Timer is working!");
// }, 2000);



// var date = new Date();
// //console.log(date.getFullYear());
// //console.log(date.getMonth() + 1);
// var minutes = date.getMinutes();
// if(minutes.toString().length < 2) {
//   minutes = "0" + minutes;
// }
// console.log("Время: " + date.getHours() + ":" + minutes);
//
// date.setHours(04);
// date.setMinutes(78);
// console.log("Время: " + date.getHours() + ":" + date.getMinutes());
//
// var arr = [5, -45, 7, 8, 9];
// console.log(arr.join("|||"));
// var stroka = arr.reverse().join(", ");
// console.log(stroka.split(", "));

class Person {
  constructor(name, age, happiness) {
    this.name = name;
    this.age = age;
    this.happiness = happiness;
  }

  info() {
    console.log("Person: " + this.name + ", Age: " + this.age +  ", Happiness: " + this.happiness);
  }
}

var alex = new Person('Alex', 45, true);
var bob = new Person('Bob', 23, false);
console.log(alex.name);
console.log(bob.happiness);
alex.name = "alex2";
alex.info();
