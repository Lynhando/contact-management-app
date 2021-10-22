const typeContactData = require("../data/typeContact");
const contactData = require('../data/contact');

import { showDataCombobox, changeTypeContact } from "../modules/typeContact.js";

showDataCombobox(typeContactData)

const selectType = document.querySelector('#typeContact') as HTMLSelectElement
selectType.addEventListener('change', function (e) {
  const sel = selectType.selectedIndex;
  const opt = selectType.options[sel];
  const typeId = opt.getAttribute('id') as string;
  changeTypeContact(typeId, contactData)
});



