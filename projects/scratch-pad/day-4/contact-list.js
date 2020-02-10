// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following API:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 * 
 * BONUS : add a printAllContactNames() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 */

// // YOUR CODE GOES BELOW HERE //

//return an object with the contact info 

function makeContact(id, nameFirst, nameLast) {
       let obj =  {
       id: id,
   nameFirst: nameFirst,
   nameLast: nameLast

 };
 return obj;
}
     function makeContactList(id, nameFirst, nameLast) {
    var contacts = []; // create an array for contacts so they can be stored 
    
    // return an object to manage contact API
    return { 
    // we implemented the length api for you //
    length: function() {

        return contacts.length;

    }, //Create a function addContact that will use the .push method
    // and return an array contacts 
    addContact: function(contact){

      return contacts.push(contact);
    }, //create a removeContact funtion with a for loop that will iterate 
    // through contacts array. use .splice method to 'splice' the array and
    //remove a value in contacts
    removeContact: function(contact){
        for(var i = 0; i < contacts.length; i++){
           if(contacts[i] === contact) {
        return contacts.splice(i, 1);
           }
        }
    },// create a findContact function that will iterate through contacts array
    // and pull the values or nameFirst and nameLast
    findContact: function(fullName) {
        for(var i = 0; i < contacts.length; i++) {
            if(fullName === contacts[i]["nameFirst"] + " " + contacts[i]["nameLast"]) { 
            return contacts[i];
            }
        }
    },//create a printAllContactNames function that will return a full names 
    //with a line break \n
    //use a for loop to iterate through array contacts
    printAllContactNames: function(fullName) {
        var contactNames = '';
        for (let i = 0; i <= contacts.length-1; i++) {
             contactNames += contacts[i].nameFirst + ' ' + contacts[i].nameLast +"\n";
     }
     
    return contactNames.slice(0,contactNames.length-1); 
 }
};

   
     }  



// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
