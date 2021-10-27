import { showDataCombobox, changeTypeContact } from "../modules/typeContact.js";
import { handleContactStorage } from "../modules/contact.js";
const typeContactData = require("../data/typeContact");
const contactData = require('../data/contact');

showDataCombobox(typeContactData)

const selectType = document.querySelector('#typeContact') as HTMLSelectElement
selectType.addEventListener('change', function (e) {
  const contactStorage = JSON.parse(localStorage.getItem("contacts"));
  const listContact = handleContactStorage(contactStorage, contactData)
  console.log(listContact)
  const sel = selectType.selectedIndex;
  const opt = selectType.options[sel];
  const typeId = opt.getAttribute('id') as string;
  changeTypeContact(typeId, listContact)
});



