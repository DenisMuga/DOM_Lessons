// ================USING querySelector()=============================


// const para = document.querySelector('div >p');
// console.log(para);

// const paras = document.querySelectorAll('p');
// const errors = document.querySelectorAll('.error');

// paras.forEach(para => {
//     console.log(para);
// })

// console.log(paras[2]);

// console.log(paras);
// console.log(errors);

// ===============================USING getElementById==============================

// const head = document.getElementById('heading');
// console.log(head);


// ===============================USING getElementByClassName==============================

// const errors = document.getElementsByClassName('error');
// console.log(errors);
// console.log(errors[2]);


// ===============================USING getElementByTagName==============================

// const piiis = document.getElementsByTagName('p');
// console.log(piiis);
// console.log(piiis[1]);


// NOTE: Id, ClassName, and TagName both return HTML collections which do not allow looping (forEach). querySelector() is therefore the best

// ===========================CHANGING TEXTS INSIDE PARAGRAPHS====================================

// const para = document.querySelector('p');
// console.log(para.innerText);
// para.innerText = 'Denis Is Great'; //Changes hello, world to 'Denis is Great'

//To apend texts, use the following
//  const para = document.querySelector('p');
//  para.innerText += '   Denis is Great';

//To change all/append the contents of the p tag

// const paras = document.querySelectorAll('p');
// paras.forEach(para =>{
//     para.innerText += '  It is a new Dawn';
//     console.log(para);
// });


// ==============================Adding(=) / Appending(+=) HTML Contents ==================================================

// const content = document.querySelector('.content');
// // content.innerHTML += '<h2>THIS IS A NEW STUFF</h2>';

// const people = ['Denis', ' Gabby', ' Mike',' Ruth'];
// people.forEach(person =>{
//     // console.log(person);
//     content.innerHTML += '<p>${person}</p>';
// });

    // =======================GETTING and SETTING HTML ATTRIBUTES =======================================

    // href is the Attribute while www.google.com is the Value. These can be changed using Javascript.

    // const link = document.querySelector('a');
    // console.log(link.getAttribute('href'));
    // link.setAttribute('href', "www.moringaschool.com");
    // link.innerText = 'Moringa School Website';

    // const mssg = document.querySelector('p');
    // console.log(mssg.getAttribute('class')); //getting the name of the class
    // mssg.setAttribute('class', 'arsenal'); //changing the name of the class.
    // mssg.setAttribute('style', 'color:green'); //chsnging the color of the of the p tag.

// const title = document.querySelector('h1');
// // title.setAttribute('style', 'margin:50px'); //Not recommended because it overrides the original property of the h1 tag.
// console.log(title.style); //Logging different styles to console log eg color margin et al.
// console.log(title.style.color);
// title.style.color = 'blue';  //Setting different properties of the h1 tag using js - recommended and does not override any predefined property.
// title.style.margin = '50px';
// title.style.fontSize = '100px';
// title.style.margin = ''; //Removes the original h1 property - setting margin to nothing or 0.

// ================================== ADDING AND REMOVING CLASSES FROM ELEMENTS ===============================================

// const content = document.querySelector('p');
// console.log(content.classList); //Knowing the classes inside a tag
// content.classList.add('denis'); //Adding a class 'denis' to p tag.
// content.classList.remove('error'); //Removing a class from a tag/element.
// content.classList.add('success');

// ================================ CHECKING TEXT CONTENT AND APPENDING CLASSES ===================================================

// const paras = document.querySelectorAll('p');
// paras.forEach(para => {
//     if(para.textContent.includes('error')){
//     para.classList.add('error');
// }
//     if(para.textContent.includes('success')){
//         para.classList.add('success');
//     }

//     // console.log(para.innerText); //Gets all the the texts from the p tag but hides part of it as per CSS rule: display: none - in the console and the browser;
//     //console.log(para.textContent); //Gets all the texts in the console but hides in the browser as per CSS rule - display: none;

// })

// ===============================TOGGLING A CLASS ===================================================

// const head = document.querySelector('#heading');
// head.classList.toggle('grimp'); //Adds a class 'grimp'
// head.classList.toggle('grimp'); //Removes a class 'grimp'

// =========================CONCATANATING STRINGS ===============================================

// let firstName = 'Denis';
// let secondName = 'Mugah'
// let fullName = firstName + ' ' + secondName;
// console.log(fullName);
// console.log(fullName[0]); //getting the first character
// console.log(fullName.length); //getting the length of the string
// console.log(fullName.toUpperCase());

// let result = fullName.toLowerCase();
// console.log(result); //Note that methods do not alter the original value of the string.


// let email = 'mugah2011@gmail.com';
// let index = email.indexOf('@'); //string method that gets the index of a character within a string
// let brii = email.lastIndexOf('a'); //logs the last index of a which is 12
// let mySlice = email.slice(0, 8); //gets the first 8 characters of the string
// let mySubst = email.substr(2,10); //picks 10 characters from position 2
// let myReplace = email.replace('m', 'w'); //Replaces the first m character in the string with w
// console.log(brii);
// console.log(index);
// console.log(mySlice);
// console.log(mySubst);
// console.log(myReplace);


// ===================NUMBERS IN JS =========================================

// const pi = 3.142;
// let radius = 7;
// let area = pi * radius**2;
// console.log(area);

// // let vehicles = 30
// // vehicles = vehicles +1;
// // console.log(vehicles);


// //OR  

// let vehicles = 31;
// // vehicles++;
// //vehicles+=10;
// //vehicles-=10;
// //vehicles *=3;
// vehicles /=10;


// console.log(vehicles);

// // ===============concatenation way ======================================

// let club = 'Arsenal';
// let trophies = 20;
// let word = 'between the year 2000 and 2022';

// let combi =  club  + ' club' + ' has won ' + trophies + ' trophies ' + word;
// console.log(combi);

// //=========================template string way ======================================

// let combin = `The club called ${club} has won ${trophies} trophies ${word}`; //Remember to use backticks `` to enclose the sentence.
// console.log(combin);

// // ============================Using HTML Templates ===================================

// let html = `
//     <h1> ${club}</h1>
//     <p> has won ${trophies} trophies</p>
//     <p> ${word}</p>
// `

// console.log(html);

//=================================ARRAYS==============================================

// let vehicles = ['benz', 'rangerover', 'nissan', 'mazda', 'premio']; //However, arrays can store different data types like strings and numbers
// console.log(vehicles)
// console.log(vehicles[0]);
// vehicles[0] = 'mitsubishi';
// console.log(vehicles);
// console.log(vehicles[0]);

// console.log(vehicles.length); //Counts the number of elements in the array = 5

// //Array Methods

// let joiner = vehicles.join(','); //Joins the array elements seperated by comas. You can change the seperating symbol by . / ? < > - _ + ' et al
// let index = vehicles.indexOf('nissan'); //Finds the index of a particular array element
// let myConcat = vehicles.concat(['wish', 'vitz', 'raum', 'passo', 'rav4', 'markx']); //Adds more elements into the array
// let myPush = vehicles.push('rvr'); //Increases the length of the original array to 6. Console log to find 'rvr' at the end.
// let myPop = vehicles.pop(); //Removes and logs the last value of the array = rvr
// console.log(joiner);
// console.log(index);
// console.log(myConcat);
// console.log(myPush);
// console.log(vehicles);
// console.log(myPop);
// console.log(vehicles);

//========================UNDEFINED================================

// let age;
// console.log(age, age + 10, `his age is ${age}`); //result: age is undefined, NaN, his age is undefined

// // ==========================NULL =======================
// let time = null;
// console.log(time, time + 10, `his time is ${time}`); //result: null, 10, his time is null

//=======================BOOLEAN==============================

// let email = 'mugah2011@gmail.com';
// let myCondition = email.includes('@');
// console.log(myCondition); //Returns true


// let myName = 'Denis Mugah'
// let myIntent = myName.includes('z');
// console.log(myIntent); //Returns false

// let myArray = ['Denis', 'Muga', 'Okoth'];
// let myFinding = myArray.includes('James');
// console.log(myFinding); //Returns false


//=======================COMPARISON OPERATOR ==============================================

// let date = '29-03-2022';
// console.log(date == '29-03-2022'); //Returns true - Remember to use == and not =


















































































































































































































