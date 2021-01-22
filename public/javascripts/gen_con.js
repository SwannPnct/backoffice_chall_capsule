// this file was only created to generate 10 contacts for test purposes
// the below function is only called through the CLI with 'node gen_con.js'

require('dotenv').config({path: "../../.env"});
require("../../routes/model/db");


const ContactModel = require('../../routes/model/schemodel');
const request = require('sync-request');

const types = ["Family", "Friend", "Work"];

const result = request("GET", "https://jsonplaceholder.typicode.com/users", (err) => {
    console.log(err);
});
const resultJSON = JSON.parse(result.getBody());

for (let i=0; i < resultJSON.length; i++) {

    const names = resultJSON[i].name.split(" ");

    const randomEmail = Math.floor(Math.random() * Math.floor(999999999)) + "@email.com";

    const newContact = new ContactModel({
        lastname: names[1],
        firstname: names[0],
        email: randomEmail,
        age: Math.floor(Math.random() * Math.floor(120)),
        type: types[Math.floor(Math.random() * Math.floor(3))]
    })

    const newContactSaved = newContact.save();
}