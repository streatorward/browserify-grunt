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