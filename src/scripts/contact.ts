
import { showData, addData } from "../modules/contact.js";
const contactData = require('../data/contact');


showData(contactData);
const form = document.querySelector(".add-form") as HTMLFormElement;

const select = document.querySelector('#comboboxContact') as HTMLSelectElement
form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  const name = document.querySelector("#name") as HTMLInputElement;
  const email = document.querySelector("#email") as HTMLInputElement;
  const phone = document.querySelector("#phone") as HTMLInputElement;
  const address = document.querySelector("#address") as HTMLInputElement;
  const sel = select.selectedIndex;
  const opt = select.options[sel];
  const typeId = opt.getAttribute('id');
  const itemContact = addData(contactData.length + 1, name, email, phone, address, typeId)
  contactData.push(itemContact)
});

document.querySelectorAll('.edit').forEach(item => {
  item.addEventListener('click', event => {
    console.log(item.getAttribute('id'))
  })
})

document.querySelectorAll('#comboboxContact').forEach(item => {
  console.log(item)
  // item.addEventListener('click', event => {
  //   console.log(item.getAttribute('id'))
  // })
})

// var dropd = document.getElementById("comboboxContact");
// var e = (document.getElementById("comboboxContact")) as HTMLSelectElement;
//     var sel = e.selectedIndex;
//     var opt = e.options[sel];
//     console.log(sel)
//     console.log(opt)




