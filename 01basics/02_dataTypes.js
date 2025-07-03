"use strict"; //Treats all the js code as newer version

//alert("Hello World!"); //We are using nodejs not browser

console.log(3 +

    3);// code readability should be high, The  code should be written clean and correctly

    console.log("Meghna");

    let name = "Meghna"; //string
    let age = 22
    let isLoggedIn = true; //boolean
    let state;


    //number => number 2 to power 53
    // bigint
    // string => ""
    //boolean => true/false
    //null => standalone value
    //undefined => variable is declared but not assigned
    //symbol => unique value

    //object

    console.log(typeof name); //string
    console.log(typeof age); //number   
    console.log(typeof isLoggedIn); //boolean
    console.log(typeof state); //undefined
    console.log(typeof null); //object (this is a bug in JavaScript)
    console.log(typeof Symbol("foo")); //symbol
    console.log(typeof BigInt(1234567890123456789012345678901234567890)); //bigint
    console.log(typeof {}); //object
    