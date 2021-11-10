import { Meteor } from 'meteor/meteor';
import { Contacts } from '../../api/contact/Contacts.js';

function addContacts(data) {
  console.log(`  Adding: ${data.firstName} (${data.owner})`);
  Contacts.collection.insert(data);
}

if (Contacts.collection.find().count() === 0) {
  if (Meteor.settings.defaultContacts) {
    console.log('Creating contact data.');
    Meteor.settings.defaultContacts.map(data => addContacts(data));
  }
}
