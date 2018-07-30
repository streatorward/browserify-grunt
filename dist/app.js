(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function createContact(name, phone, address){
    return `<h1>${name}</h1>
            <p>${phone}</p>
            <p>${address}</p>`;
}

module.exports = createContact;
},{}],2:[function(require,module,exports){
"use strict";

let contacts = [
    {
        name: "Streator Ward",
        phone: "4444444444",
        address: "100 Where I Live Ave, TN"
    },
    {
        name: "Kristyn Whaley",
        phone: "5555555555",
        address: "200 Where They Live Ave, TN"
    },
    {
        name: "Miller Puppy",
        phone: "7777777777",
        address: "300 Where We Live Ave, TN"
    }
];

localStorage.setItem("contacts", JSON.stringify(contacts));

function getContacts(){
    return JSON.parse(localStorage.getItem("contacts"));
}

module.exports = getContacts;
},{}],3:[function(require,module,exports){
let contactForm = require("./contactForm");
},{"./contactForm":3}],4:[function(require,module,exports){
let createContact = require("./contact");
let getContacts = require("./contactCollection");

function listContacts(){
    getContacts().forEach(contact => {
        let contactComponent = createContact(contact.name, contact.phone, contact.address);
        writeContactToDOM(contactComponent);
    });
}


function writeContactToDOM(contact){
    document.querySelector("#contactList").innerHTML += contact;
}

module.exports = listContacts;
},{"./contact":1,"./contactCollection":2}],5:[function(require,module,exports){
"use strict";

let contactForm = require("./contactForm");
let listContacts = require("./contactList");

listContacts();
},{"./contactForm":3,"./contactList":4}]},{},[5]);
