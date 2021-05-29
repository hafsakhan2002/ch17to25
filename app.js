// ...................................ARRAYS AND LOOPS.....(CHHAPTERS 17-20)...................................




// var arr = [[],[],[],[]];
// var arr = [[0 , 1 , 2 , 3], [1,0,1,2],[2,1,0,1]];
// console.log(arr);


// arr[0].join(" ")
// console.log(arr[0]);
// document.write(arr[0].join(" ")+ "<br>")


// arr[1].join(" ")
// console.log(arr[1]);
// document.write(arr[1].join(" ")+ "<br>")


// arr[2].join(" ")
// console.log(arr[2]);
// document.write(arr[2].join(" "))


// for(i = 1; i <= 10 ; i++){
//     document.write(i + "<br>")
// }


// var a = parseInt(prompt("Enter Number to show it's multiplication Table"));
// var b = parseInt(prompt("Enter the length of table"));
// for(i=1 ; i <=b ; i++){
//     document.write(a + "X" + i + "=" +a*i + "<br>")
// }


// var fruits = ["apple", "banana", "mango", "orange","strawberry"];
// console.log(fruits);
// for(i = 0 ; i<fruits.length;i++){
//     document.write(fruits[i]+ "</br>")
// }


// for(i=1; i<=15;i++){
//     document.write(i+ "<br>")
// }


// for(i=10; i>=1;i--){
//     document.write(i+"<br>")
// }


// for(i = 0 ; i<=20 ; i+=2){
//     document.write(i + "<br>")
// }


// for (i= 1 ; i<=19 ; i+=2){
//     document.write(i + "<br>")
// }


// for(i = 2 ; i<=20 ; i+=2){
//     document.write(i + "k" + "<br>")
// }




// var a = ["cake", "applepie","cookies", "chips","patties"]
// var b = prompt("Enter item for search")

// if(b===a[0] || b===a[1]||b===a[2]||b===a[3]||b===a[4]){
//     alert(b + " " + "is available at Index"+ " " + a.indexOf(b)+ " " +"in our bakery" )
//     console.log(a.indexOf(b))
// }

// else{
//     alert(b + " " + "is not available in our bakery")
// }


// var a = [24, 53, 78, 91, 12];
// console.log(a)
// console.log(Math.max(...a));
// document.write ("<h3>Array Items :"+ " " + a + "</h3>"+ "<h3> The largest number is"+ " " + Math.max(...a) +"</h3>" )


// var a = [24, 53, 78, 91, 12];
// console.log(a)
// console.log(Math.min(...a));
// document.write ("<h3>Array Items :"+ " " + a + "</h3>"+ "<h3> The smallest number is"+ " " + Math.min(...a) +"</h3>" )


// var a = 5;
// for(i = 1 ; i <=20 ; i++){
// document.write(a*i+",")
// }

// ........................................ChangingCase............................................


// var a = prompt("Enter any Text");
// a=a.toUpperCase()
// console.log(a);
// alert(a);


// var a = prompt("Enter any Text");
// var b = a.slice(0,1);
// var b = b.toUpperCase();
// var c = a.slice(1);
// var c = c.toLowerCase();
// a = b+c;
// alert(a);
// console.log(a);





// ........................Strings: Measuring length and extracting parts............................




// var a = prompt("Enter Your Favourite Mobile Phone Model");
// console.log(a.length);
// alert(a.length);

// var a = prompt('Enter any text');
// console.log(a)
// var b = a.length;
// console.log(b);
// var c = a.charAt(a.length-1);
// console.log(c)
// alert(c)



// var a = "Pakistani";
// console.log(a)
// var b = a.indexOf("n");
// console.log(b);
// alert("Index of n is " + b)


// var a = prompt("Enter user name")

// for (var i = 0; i <a.length ; i++) {
//      if (a.charAt(i) === "@" || a.charAt(i) === "," || a.charAt(i) === "." ||a.charAt(i) === "!") {
//      prompt("enter a valid username")
//      break;
//      }
//      }




// var a =  "The quick brown fox jumps over the lazy dog"
// a = a.toLowerCase();
// console.log(a)
// var b = a.split(" ")
// console.log(b)
// var c = 0;     //"c is the quantity of word the"

// for(i=0 ; i<b.length ; i++){
//     if(b[i]==="the"){
//         c++
//     }
// }
// console.log(c)






// var a = "Pakistani";
// console.log(a);
// var b = a.charAt(3);
// console.log(b)



// var a = "Hyderabad"
// console.log(a);
// var b = "Islam";
// console.log(b)
// var c = b + a.slice(5) ;
// console.log(c)




// var a =  "Ali and Sami are best friends They play cricket and football together";
// console.log(a);
// var b = a.replace(/and/g,"&");
// console.log(b)

// .......................................ALL ASSIGNMENTS COMPLETED..................................... 