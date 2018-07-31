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



