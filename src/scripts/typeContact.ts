const typeContactData = require("../data/typeContact");

import { showDataCombobox, changeTypeContact } from "../modules/typeContact.js";

showDataCombobox(typeContactData)

const selectType = document.querySelector('#typeContact') as HTMLSelectElement
selectType.addEventListener('change', function (e) {
  const contactData = JSON.parse(localStorage.getItem('contacts'));
  const sel = selectType.selectedIndex;
  const opt = selectType.options[sel];
  const typeId = opt.getAttribute('id') as string;
  changeTypeContact(typeId, contactData)
});



