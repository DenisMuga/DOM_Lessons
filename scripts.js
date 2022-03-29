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








































































































































