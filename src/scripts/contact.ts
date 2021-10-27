
import { showData, addContact, editContact, handleContactStorage } from "../modules/contact.js";
const contactData = require('../data/contact');
const contactStorage = JSON.parse(localStorage.getItem("contacts"));
const listContact = handleContactStorage(contactStorage, contactData)


showData(listContact);
const addForm = document.querySelector(".add-form") as HTMLFormElement;
const editForm = document.querySelector(".edit-form") as HTMLFormElement;


const addFormSelect = document.querySelector('#comboboxContact') as HTMLSelectElement
addForm.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  const contactStorage = JSON.parse(localStorage.getItem("contacts"));
  const listContact = handleContactStorage(contactStorage, contactData)

  const fomrData = new FormData(addForm)  
  const name = fomrData.get('name') as string
  const email = fomrData.get('email') as string
  const phone = fomrData.get('phone') as string
  const address = fomrData.get('address') as string
  const sel = addFormSelect.selectedIndex; 
  const opt = addFormSelect.options[sel];
  const typeId = Number(opt.getAttribute('id'));
  if (name && email && phone && address) addContact(name, email, phone, address, typeId, listContact)    
});

const editFormSelect = document.querySelector('#editComboboxContact') as HTMLSelectElement
editForm.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  const contactStorage = JSON.parse(localStorage.getItem("contacts"));
  const listContact = handleContactStorage(contactStorage, contactData)

  const fomrData = new FormData(editForm)  
  const name = fomrData.get('name') as string
  const email = fomrData.get('email') as string
  const phone = fomrData.get('phone') as string
  const address = fomrData.get('address') as string
  const sel = editFormSelect.selectedIndex;
  const opt = editFormSelect.options[sel];
  const typeId = Number(opt.getAttribute('id'));
  const contactFormId = document.querySelector("#contactFormId") as HTMLElement
  const id = Number(contactFormId.innerHTML.trim())
  if (name && email && phone && address) editContact(id, name, email, phone, address, typeId, listContact)
});

const deleteForm = document.querySelector('#deleteForm') as HTMLSelectElement
deleteForm.addEventListener("click", (e:Event) =>{
  const contactFormId = document.querySelector("#delFormId") as HTMLElement
  const id = Number(contactFormId.innerHTML.trim())

  let contacts =localStorage.getItem('contacts') ? JSON.parse(localStorage.getItem('contacts')) : [];
  
  const index = contacts.findIndex((item: any) => item.id === id);
  contacts.splice(index, 1)
  localStorage.setItem('contacts', JSON.stringify(contacts));
  location.reload();
});



